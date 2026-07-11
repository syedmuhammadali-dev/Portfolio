// Post-build step: renders the built SPA in headless Chrome and writes the
// fully-rendered HTML back to dist/index.html so crawlers that don't execute
// JS (LinkedIn, Bing, social share bots) still see real content, and Googlebot
// gets an instantly-available render instead of waiting on client JS.
import puppeteer from "puppeteer";
import { preview } from "vite";
import { writeFileSync } from "fs";
import path from "path";

const server = await preview({ preview: { port: 4173 } });
const url = `http://localhost:4173/`;

const browser = await puppeteer.launch({ headless: "new" });
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
