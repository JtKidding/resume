const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
  });

  const page = await browser.newPage();

  const url = 'https://jtkidding.github.io/resume/';

  await page.goto(url, { waitUntil: 'networkidle0' });

  // ⭐ 關鍵：強制使用 print media
  await page.emulateMediaType('print');

  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '18mm',
      bottom: '18mm',
      left: '15mm',
      right: '15mm',
    },
  });

  await browser.close();
})();
