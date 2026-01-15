import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, `../../env/.env.${process.env.appenv}`) });

// This test navigates to Amazon India, searches for 'samsung', and logs the top 5 items with rating > 4.2

test('Amazon.in search for Samsung and get top 5 items with rating > 4.2', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await page.fill('input#twotabsearchtextbox', process.env.SEARCH_TEXT);
  await page.click('input#nav-search-submit-button');
  await page.waitForTimeout(5000); // Wait for results to load
  await page.waitForSelector('div.s-main-slot');

  for(let i=1;i<10;i++)
  {
    const products = await page.locator("(//a[@class='a-link-normal s-line-clamp-2 s-line-clamp-3-for-col-12 s-link-style a-text-normal']/h2/span)["+i+"]");
  
    const rating =await page.locator("(//span[@class='a-size-small a-color-base'])["+i+"]").textContent();
    if (!rating) continue;
    const rating2 = parseFloat(rating.trim());

    if(rating2> 4.2)
    {
    console.log(rating+'products:'+i, await products.textContent());
    }
  }
  
});
