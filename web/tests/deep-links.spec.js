const { test, expect } = require('@playwright/test');

/**
 * Deep Links – direkter Seitenaufruf mit Section-Hash und Refresh-Verhalten
 */
test.describe('Deep Links', () => {
  test('TC-W57: Direkter Aufruf der Startseite', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(/Riquet|Kaffeehaus/i);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('#timeline')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('TC-W58: Direkter Aufruf mit Section-Hash', async ({ page }) => {
    await page.goto('/#timeline', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveURL(/#timeline$/);
    await expect(page.locator('#timeline')).toBeInViewport();
    await expect(page.locator('#timeline h2')).toBeVisible();
  });

  test('TC-W59: Ungültiger Hash lädt die Seite ohne Absturz', async ({ page }) => {
    await page.goto('/#nicht-vorhanden', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(/Riquet|Kaffeehaus/i);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('#nicht-vorhanden')).toHaveCount(0);
  });

  test('TC-W60: Refresh nach Navigation zu einer Section', async ({ page }) => {
    await page.goto('/#timeline', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#timeline')).toBeInViewport();

    await page.reload({ waitUntil: 'domcontentloaded' });

    await expect(page).toHaveURL(/#timeline$/);
    await expect(page.locator('#timeline')).toBeInViewport();
    await expect(page.locator('#timeline h2')).toBeVisible();
  });
});
