// Post-build step: renders the built SPA in headless Chrome and writes the
// fully-rendered HTML back to dist/index.html so crawlers that don't execute
// JS (LinkedIn, Bing, social share bots) still see real content, and Googlebot
// gets an instantly-available render instead of waiting on client JS.
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { preview } from "vite";
import { writeFileSync, existsSync } from "fs";
import path from "path";

// Common system Chrome/Edge install locations for local (non-Linux) dev
// machines, where @sparticuz/chromium's Linux-only binary doesn't apply.
const LOCAL_BROWSER_CANDIDATES = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
];

async function resolveExecutablePath() {
  if (process.platform === "linux") {
    const p = await chromium.executablePath().catch(() => null);
    if (p) return p;
  }
  return LOCAL_BROWSER_CANDIDATES.find((p) => existsSync(p)) ?? null;
}

const executablePath = await resolveExecutablePath();
if (!executablePath) {
  console.warn(
    "[prerender] No Chrome/Chromium found — skipping prerender, dist/index.html stays client-rendered only.",
  );
  process.exit(0);
}

const server = await preview({ preview: { port: 4173 } });
const url = `http://localhost:4173/`;

const browser = await puppeteer.launch({
  executablePath,
  args: process.platform === "linux" ? chromium.args : [],
  headless: "new",
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle0" });

// Let framer-motion's IntersectionObserver-driven reveal animations settle
// so the captured markup isn't stuck at opacity:0.
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await new Promise((resolve) => setTimeout(resolve, 1500));

const html = await page.content();
const outPath = path.resolve("dist/index.html");
writeFileSync(outPath, html);
console.log(`Prerendered HTML written to ${outPath}`);

await browser.close();
await new Promise((resolve, reject) => {
  server.httpServer.close((err) => (err ? reject(err) : resolve()));
});
