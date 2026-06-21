
const {test, expect} = require('@playwright/test');
const { only } = require('node:test');
const loginPage=require('../Pages/loginPage');

test.only('netflix login', async ({ page }) => {
  await page.goto('https://www.netflix.com/in/');

  const login=new loginPage(page);
  await login.loginPage();
});


