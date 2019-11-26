const puppeteer = require('puppeteer');
var wait=1000;

(async () => {
  
  const browser = await puppeteer.launch({ headless: false }); // headless true or false
  const page = await browser.newPage(); // tab
  await page.setViewport({width: 1240, height:1080}); // browser size

  // wait function
  async function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  // google.com
  await page.goto('https://www.google.co.jp/');
  await page.type('.gLFyf', 'jtekt'); // input form box
  await page.screenshot({path: 'google.png'});
  await sleep(wait);

  // click search button
  await page.focus('input[name="btnK"]'); // click search button
  await page.click('input[name="btnK"]');
  await sleep(wait);
  await page.screenshot({path: 'search.png'});
 
  // click top link
  await page.click('.rc > .r > a');
  await sleep(wait);
  await page.screenshot({path: 'homepage.png'});

  // click using a tag
  await page.click('a[class="level01"]');
  await sleep(wait);
  await page.screenshot({path: 'link_page.png'});
  
  // close browser
  await browser.close();
})();
