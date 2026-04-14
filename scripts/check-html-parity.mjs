#!/usr/bin/env node

import fs from "node:fs";
import fsp from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baselineRefArg = process.argv.find((arg) => arg.startsWith("--baseline-ref="));
const baselineRef = baselineRefArg ? baselineRefArg.split("=")[1] : "HEAD";
const tmpRoot = await fsp.mkdtemp(path.join(os.tmpdir(), "jmaclabs-html-parity-"));
const baselineDir = path.join(tmpRoot, "baseline");
const candidateDir = path.join(tmpRoot, "candidate");
const sourceNodeModules = path.join(root, "node_modules");

if (!fs.existsSync(sourceNodeModules)) {
  throw new Error("node_modules is required before running HTML parity checks");
}

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: "pipe",
    encoding: "utf8",
    env: {
      ...process.env,
      ASTRO_TELEMETRY_DISABLED: "1",
      XDG_CONFIG_HOME: process.env.XDG_CONFIG_HOME ?? "/tmp",
      CI: process.env.CI ?? "1",
    },
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed in ${cwd}\n${result.stdout}\n${result.stderr}`);
  }
}

async function copyCurrentTree() {
  await fsp.cp(root, candidateDir, {
    recursive: true,
    filter(source) {
      const relative = path.relative(root, source);
      if (!relative) {
        return true;
      }
      const topLevel = relative.split(path.sep)[0];
      return ![".git", ".astro", "dist", "node_modules"].includes(topLevel);
    },
  });
}

function listHtmlFiles(dir) {
  const results = [];

  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const absolute = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(absolute);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith(".html")) {
        results.push(path.relative(dir, absolute));
      }
    }
  }

  walk(dir);
  return results.sort();
}

function compareHtmlDirectories(leftDir, rightDir) {
  const leftFiles = listHtmlFiles(leftDir);
  const rightFiles = listHtmlFiles(rightDir);

  if (JSON.stringify(leftFiles) !== JSON.stringify(rightFiles)) {
    const onlyLeft = leftFiles.filter((file) => !rightFiles.includes(file));
    const onlyRight = rightFiles.filter((file) => !leftFiles.includes(file));
    throw new Error(
      [
        "HTML file lists differ.",
        onlyLeft.length ? `Only in baseline:\n${onlyLeft.map((file) => `- ${file}`).join("\n")}` : "",
        onlyRight.length ? `Only in candidate:\n${onlyRight.map((file) => `- ${file}`).join("\n")}` : "",
      ].filter(Boolean).join("\n\n"),
    );
  }

  const mismatches = [];

  for (const relative of leftFiles) {
    const left = fs.readFileSync(path.join(leftDir, relative), "utf8");
    const right = fs.readFileSync(path.join(rightDir, relative), "utf8");
    if (left !== right) {
      mismatches.push(relative);
    }
  }

  if (mismatches.length) {
    const first = mismatches[0];
    const diff = spawnSync(
      "diff",
      ["-u", path.join(leftDir, first), path.join(rightDir, first)],
      { encoding: "utf8" },
    );
    throw new Error(
      [
        `HTML output changed for ${mismatches.length} file(s).`,
        ...mismatches.slice(0, 20).map((file) => `- ${file}`),
        "",
        `First diff (${first}):`,
        diff.stdout || diff.stderr || "diff output unavailable",
      ].join("\n"),
    );
  }
}

try {
  await fsp.mkdir(baselineDir, { recursive: true });
  await fsp.mkdir(candidateDir, { recursive: true });

  const archivePath = path.join(tmpRoot, "baseline.tar");
  execFileSync("git", ["archive", `--output=${archivePath}`, "--format=tar", baselineRef], {
    cwd: root,
    stdio: "inherit",
  });
  const tar = spawnSync("tar", ["-xf", archivePath, "-C", baselineDir], { encoding: "utf8" });
  if (tar.status !== 0) {
    throw new Error(`tar extract failed for ${baselineRef}`);
  }

  await copyCurrentTree();
  await fsp.symlink(sourceNodeModules, path.join(baselineDir, "node_modules"), "dir");
  await fsp.symlink(sourceNodeModules, path.join(candidateDir, "node_modules"), "dir");

  run("pnpm", ["build"], baselineDir);
  run("pnpm", ["build"], candidateDir);
  compareHtmlDirectories(path.join(baselineDir, "dist"), path.join(candidateDir, "dist"));

  console.log(`HTML parity passed for ${listHtmlFiles(path.join(candidateDir, "dist")).length} generated page(s) against ${baselineRef}.`);
} finally {
  await fsp.rm(tmpRoot, { recursive: true, force: true });
}
