import { test, expect } from '@playwright/test';
import { PlaywrightPage } from '../models/playwright'

test('basic test', async ({ page }) => {
  const homePage = new PlaywrightPage(page);
  await homePage.navigate();
  const name = await homePage.getTitle();
  expect(name).toBe('Playwright');
});
