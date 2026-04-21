import { test, expect } from '@playwright/test';

test('toon.at 접속', async ({ page }) => {
  await page.goto('https://toon.at/');
  await expect(page.locator('html')).toBeVisible();

  // 브라우저 닫지 않고 대기
  await page.pause();
});
