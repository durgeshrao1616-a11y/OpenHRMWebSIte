import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, `../../env/.env.${process.env.appenv}`) });
const LoginPage = require('../pages/LoginPage');

test('Login test', async ({ page }) => {
const loginPage = new LoginPage(page);
console.log('baseURL:', process.env.BASE_URL);
await page.goto(process.env.BASE_URL);
await loginPage.login(process.env.USER, process.env.PASSWORD);
await expect(page.locator(loginPage.dashboardHeader)).toHaveText('Dashboard');
});
