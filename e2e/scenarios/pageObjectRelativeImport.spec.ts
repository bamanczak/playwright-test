import { test, expect } from '@playwright/test';
import { HomePage } from '../models/playwright'

test('basic test', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  const name = await homePage.getTitle();
  expect(name).toBe('Playwright');
});
