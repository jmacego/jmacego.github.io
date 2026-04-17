import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "..");
const resumePath = resolve(repoRoot, "src/pages/resume/index.md");
const aboutPath = resolve(repoRoot, "src/pages/about/index.md");

function read(path) {
  return readFileSync(path, "utf8");
}

test("resume keeps the venture timeline in start-date order", () => {
  const resume = read(resumePath);

  assert.doesNotMatch(resume, /Hyak Photography \/ Hyakdev\.com LLC/);
  assert.match(resume, /\*\*PowerSurge Technologies \/ FastServers\.net\*\* \| Cedar Rapids, IA \(1995–1996\)/);
  assert.match(resume, /\*\*5GuysTech\.com, LLC\*\* \| Seattle, WA \(1997–2001\)/);
  assert.match(resume, /### Avitus Aviation Corp \| Gig Harbor, WA\s+\*\*President\*\*\s+\*2001 – 2010\*/);
  assert.match(resume, /### Hyakdev\.com LLC \| Snoqualmie Pass, WA\s+\*\*Owner\*\*\s+\*2005 – 2010\*/);
  assert.match(resume, /### Hyak Photography \| Snoqualmie Pass, WA\s+\*\*Owner\*\*\s+\*2009 – 2015\*/);
  assert.match(resume, /### Sheep's Clothing \| Kennewick, WA\s+\*\*Owner\*\*\s+\*2010 – 2015\*/);

  const orderedEntries = [
    "**PowerSurge Technologies / FastServers.net** | Cedar Rapids, IA (1995–1996)",
    "**5GuysTech.com, LLC** | Seattle, WA (1997–2001)",
    "### Avitus Aviation Corp | Gig Harbor, WA",
    "### Hyakdev.com LLC | Snoqualmie Pass, WA",
    "### Hyak Photography | Snoqualmie Pass, WA",
    "### Sheep's Clothing | Kennewick, WA",
  ];

  let previousIndex = -1;
  for (const entry of orderedEntries) {
    const currentIndex = resume.indexOf(entry);
    assert.notEqual(currentIndex, -1, `Expected to find ${entry}`);
    assert.ok(currentIndex > previousIndex, `Expected ${entry} to appear after the previous venture entry.`);
    previousIndex = currentIndex;
  }
});

test("about page reflects the same venture order and Hyak date split", () => {
  const about = read(aboutPath);

  assert.doesNotMatch(about, /Hyak Photography \/ Hyakdev\.com/);
  assert.match(about, /\*\*PowerSurge Technologies \/ FastServers\.net\*\* \(1995–1996\)/);
  assert.match(about, /\*\*5GuysTech\.com\*\* \(1997–2001\)/);
  assert.match(about, /\*\*Avitus Aviation Corp\*\* \(2001–2010\)/);
  assert.match(about, /\*\*Hyakdev\.com\*\* \(2005–2010\)/);
  assert.match(about, /\*\*Hyak Photography\*\* \(2009–2015\)/);
  assert.match(about, /\*\*Sheep's Clothing\*\* \(2010–2015\)/);

  const orderedEntries = [
    "- **PowerSurge Technologies / FastServers.net** (1995–1996)",
    "- **5GuysTech.com** (1997–2001)",
    "- **Avitus Aviation Corp** (2001–2010)",
    "- **Hyakdev.com** (2005–2010)",
    "- **Hyak Photography** (2009–2015)",
    "- **Sheep's Clothing** (2010–2015)",
  ];

  let previousIndex = -1;
  for (const entry of orderedEntries) {
    const currentIndex = about.indexOf(entry);
    assert.notEqual(currentIndex, -1, `Expected to find ${entry}`);
    assert.ok(currentIndex > previousIndex, `Expected ${entry} to appear after the previous venture entry.`);
    previousIndex = currentIndex;
  }
});
