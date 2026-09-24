const { test, expect } = require('@playwright/test');
const { ReservationModal } = require('../page-objects/reservationModal');
const { TimelineSection } = require('../page-objects/timelineSection');

async function expectNoHorizontalOverflow(page) {
  const hasOverflow = await page.evaluate(() => {
    const documentWidth = document.documentElement.scrollWidth;
    const bodyWidth = document.body.scrollWidth;
    return Math.max(documentWidth, bodyWidth) > window.innerWidth;
  });

  expect(hasOverflow).toBe(false);
}

test.describe('Responsive Verhalten', () => {
  test('TC-W61: Desktop-Layout (1920x1080) ohne horizontalen Overflow', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expectNoHorizontalOverflow(page);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('TC-W62: Tablet (768x1024) ohne abgeschnittene Inhalte', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expectNoHorizontalOverflow(page);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('#timeline')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('TC-W63: Smartphone (375x667) – Reservierungsmodal vollständig bedienbar', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const reservationModal = new ReservationModal(page);
    const footerReserveButton = page.locator('#about-location-btn');

    await footerReserveButton.scrollIntoViewIfNeeded();
    await expect(footerReserveButton).toBeVisible();
    await footerReserveButton.click();
    await reservationModal.waitForOpen();

    await expect(reservationModal.modal).toBeVisible();
    await expect(reservationModal.form).toBeVisible();
    await reservationModal.closeButton.scrollIntoViewIfNeeded();
    await reservationModal.submitButton.scrollIntoViewIfNeeded();
    await expect(reservationModal.closeButton).toBeVisible();
    await expect(reservationModal.submitButton).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });

  test('TC-W64: Smartphone im Querformat ohne Layoutbruch', async ({ page }) => {
    await page.setViewportSize({ width: 667, height: 375 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expectNoHorizontalOverflow(page);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('#timeline')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('TC-W65: Timeline-Accordion öffnet und schließt bei 375px und 768px', async ({ page }) => {
    const timelineSection = new TimelineSection(page);

    for (const width of [375, 768]) {
      await page.setViewportSize({ width, height: width === 375 ? 667 : 1024 });
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      await timelineSection.accordionHeader.scrollIntoViewIfNeeded();

      await timelineSection.accordionHeader.click();
      await expect(timelineSection.accordionWrapper).toHaveClass(/active/);

      await timelineSection.accordionHeader.click();
      await expect(timelineSection.accordionWrapper).not.toHaveClass(/active/);
    }
  });
});
