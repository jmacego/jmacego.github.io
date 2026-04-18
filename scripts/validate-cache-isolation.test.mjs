import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const repoRoot = resolve(import.meta.dirname, "..");
const astroConfigPath = resolve(repoRoot, "astro.config.mjs");
const validateScriptPath = resolve(repoRoot, "scripts/validate.sh");

async function loadAstroConfig() {
  const moduleUrl = pathToFileURL(astroConfigPath);
  moduleUrl.search = `cache-test=${Date.now()}-${Math.random()}`;
  return (await import(moduleUrl.href)).default;
}

test("astro config uses an isolated cache dir when ASTRO_CACHE_DIR is provided", async () => {
  process.env.ASTRO_CACHE_DIR = ".astro-validate-test";
  const config = await loadAstroConfig();
  assert.equal(config.cacheDir, ".astro-validate-test");
  delete process.env.ASTRO_CACHE_DIR;
});

test("validation script uses its own Astro cache instead of deleting the dev cache", () => {
  const script = readFileSync(validateScriptPath, "utf8");

  assert.match(script, /VALIDATION_ASTRO_CACHE_DIR="\$ROOT_DIR\/\.astro-validate"/);
  assert.match(script, /export ASTRO_CACHE_DIR="\$VALIDATION_ASTRO_CACHE_DIR"/);
  assert.match(script, /trap 'rm -rf "\$VALIDATION_ASTRO_CACHE_DIR"' EXIT/);
  assert.match(script, /rm -rf "\$VALIDATION_ASTRO_CACHE_DIR"/);
  assert.doesNotMatch(script, /rm -rf "\$ROOT_DIR\/\.astro"/);
});
