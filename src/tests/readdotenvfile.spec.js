import { test } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Adjust path depending on where .env.qa is located
//dotenv.config({ path: path.resolve(__dirname, '../../env/.env.stage') });
dotenv.config({ path: path.resolve(__dirname, `../../env/.env.${process.env.appenv}`) });
//dotenv.config({ path: path.resolve(__dirname, '../../env/.env.${process.env.appenv}') });



test('Login test', async ({ page }) => {
console.log('Loading env file:', path.resolve(__dirname, `../../env/.env.${process.env.appenv}`));
console.log('baseURL:', process.env.BASE_URL);
})