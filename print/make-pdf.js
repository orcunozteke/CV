// Regenerates assets/OrcunOzteke_CV.pdf from print/cv-print.html.
// Usage: node print/make-pdf.js   (needs: npm i -D playwright, and a Chromium: npx playwright install chromium)
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(root, 'print', 'cv-print.html'), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
  await page.pdf({ path: path.join(root, 'assets', 'OrcunOzteke_CV.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log('written assets/OrcunOzteke_CV.pdf');
})().catch(e => { console.error(e); process.exit(1); });
