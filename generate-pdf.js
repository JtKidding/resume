const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new', // 新版 headless
  });

  const page = await browser.newPage();

  // 你的 GitHub Pages 履歷網址
  const url = 'https://jtkidding.github.io/resume/';

  console.log('Loading page...');
  await page.goto(url, {
    waitUntil: 'networkidle0', // 等待所有資源載入完成
  });

  console.log('Generating PDF...');
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true, // 非常重要，否則背景色會消失
    margin: {
      top: '20mm',
      bottom: '20mm',
      left: '15mm',
      right: '15mm',
    },
  });

  await browser.close();
  console.log('Done! resume.pdf created.');
})();
