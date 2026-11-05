const crypto = require('node:crypto');
const { test, expect } = require('@playwright/test');

// Real user flow against the Flisk-started stack: web app + MongoDB in Docker.
test('signup, logout and login persist through MongoDB', async ({ page }) => {
  const email = `flisk-e2e-${Date.now()}@example.com`;
  const password = crypto.randomBytes(12).toString('hex'); // generated per run, never committed

  await page.goto('/signup');
  await page.fill('#email', email);
  await page.fill('#password', password);
  await page.fill('#confirmPassword', password);
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/\/$/);

  await page.goto('/account');
  await expect(page.locator('#email')).toHaveValue(email);

  await page.goto('/logout');
  await page.goto('/login');
  await page.fill('#email', email);
  await page.fill('#password', password);
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/\/$/);

  await page.goto('/account');
  await expect(page.locator('#email')).toHaveValue(email);
});
