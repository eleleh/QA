const { test, expect } = require('@playwright/test');
const { ReservationModal } = require('../page-objects/reservationModal');
const { TimelineSection } = require('../page-objects/timelineSection');

async function getUnnamedVisibleControls(page) {
  return page.locator('a:visible, button:visible, input:visible, select:visible, textarea:visible').evaluateAll((controls) => {
    return controls
      .filter((control) => {
        const ariaLabel = control.getAttribute('aria-label')?.trim();
        const title = control.getAttribute('title')?.trim();
        const text = control.textContent?.trim();
        const associatedLabel = control.id
          ? document.querySelector(`label[for="${CSS.escape(control.id)}"]`)?.textContent?.trim()
          : control.closest('label')?.textContent?.trim();

        return !ariaLabel && !title && !text && !associatedLabel;
      })
      .map((control) => ({ tag: control.tagName, id: control.id }));
  });
}

test.describe('Accessibility-Basis', () => {
  test('TC-W66: Navigation mit Tastatur (Tab, Enter, Escape)', async ({ page }) => {
    test.fail(true, 'Known bug BUG-003: Escape schließt das mobile Menü nicht');

    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const hamburgerButton = page.locator('#hamburgerBtn');
    const mobileMenu = page.locator('#mobileMenu');

    await hamburgerButton.focus();
    await expect(hamburgerButton).toBeFocused();

    await page.keyboard.press('Tab');
    await expect.poll(() => page.evaluate(() => document.activeElement?.tagName)).toMatch(/A|BUTTON|INPUT|TEXTAREA|SELECT/);

    await hamburgerButton.focus();
    await page.keyboard.press('Enter');
    await expect(mobileMenu).toHaveClass(/active/);

    await page.keyboard.press('Escape');
    await expect(mobileMenu).not.toHaveClass(/active/);
  });

  test('TC-W67: Modal-Fokus bleibt im Modal, Escape schließt', async ({ page }) => {
    test.fail(true, 'Known bug BUG-004: Fokusfalle und Escape-Schließen im Modal fehlen');

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const reservationModal = new ReservationModal(page);
    const footerReserveButton = page.locator('#about-location-btn');

    await footerReserveButton.scrollIntoViewIfNeeded();
    await footerReserveButton.click();
    await reservationModal.waitForOpen();

    for (let index = 0; index < 12; index++) {
      await page.keyboard.press('Tab');
      await expect.poll(() => page.evaluate(() => {
        const modal = document.querySelector('#reservationModal');
        return modal?.contains(document.activeElement) ?? false;
      })).toBe(true);
    }

    await page.keyboard.press('Escape');
    await expect(reservationModal.modal).toBeHidden();
  });

  test('TC-W68: Interaktive Elemente besitzen verständliche accessible names', async ({ page }) => {
    test.fail(true, 'Known bug BUG-005: Mehrere sichtbare Controls besitzen keinen Accessible Name');

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const unnamedControls = await getUnnamedVisibleControls(page);
    expect(unnamedControls).toEqual([]);
  });

  test('TC-W69: Bilder besitzen Alt-Texte', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const imagesWithoutAlt = await page.locator('img:visible').evaluateAll((images) => {
      return images
        .filter((image) => !image.hasAttribute('alt') || image.getAttribute('alt').trim() === '')
        .map((image) => image.getAttribute('src'));
    });

    expect(imagesWithoutAlt).toEqual([]);
  });

  test('TC-W70: Accordion verwendet aria-expanded korrekt', async ({ page }) => {
    test.fail(true, 'Known bug BUG-006: Timeline-Accordion besitzt kein aria-expanded');

    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const timelineSection = new TimelineSection(page);
    await timelineSection.accordionHeader.scrollIntoViewIfNeeded();

    await expect(timelineSection.accordionHeader).toHaveAttribute('aria-expanded', 'false');

    await timelineSection.accordionHeader.click();
    await expect(timelineSection.accordionHeader).toHaveAttribute('aria-expanded', 'true');

    await timelineSection.accordionHeader.click();
    await expect(timelineSection.accordionHeader).toHaveAttribute('aria-expanded', 'false');
  });
});
