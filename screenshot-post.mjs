import { chromium } from "playwright";

const url = "http://172.27.0.54:4323/blog/ai-vs-dot-com-bubbles-can-build-foundations/";
const [,, label] = process.argv;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });
await page.goto(url, { waitUntil: "networkidle" });
await page.screenshot({ path: `post-${label}.png`, fullPage: true });
await browser.close();
console.log(`Saved post-${label}.png`);
