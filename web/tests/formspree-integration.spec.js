const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page-objects/homePage');
const { ReservationModal } = require('../page-objects/reservationModal');
const { ContactForm } = require('../page-objects/contactForm');

const FORMSPREE_URL = 'https://formspree.io/f/mnjozpep';

async function mockFormspree(page, status, body = {}) {
    await page.route(FORMSPREE_URL, async route => {
        await route.fulfill({
            status,
            contentType: 'application/json',
            body: JSON.stringify(body)
        });
    });
}

async function openReservation(page) {
    const homePage = new HomePage(page);
    const reservationModal = new ReservationModal(page);

    await homePage.goto();
    await homePage.clickReserve();
    await reservationModal.waitForOpen();
    await reservationModal.fill();

    return reservationModal;
}

test.describe('Formspree-Integration', () => {
    test('TC-W52: Erfolgreicher Reservierungs-Request zeigt Bestätigung', async ({ page }) => {
        await mockFormspree(page, 200, { ok: true });
        const reservationModal = await openReservation(page);

        await reservationModal.submitWithWorkaround();

        await expect(reservationModal.successModal).toBeVisible();
    });

    test('TC-W53: Reservierungs-Request mit 422 zeigt Fehlermeldung und behält Eingaben', async ({ page }) => {
        await mockFormspree(page, 422, {
            errors: [{ message: 'Ungültige Formulardaten' }]
        });
        const reservationModal = await openReservation(page);
        const surname = await reservationModal.surnameInput.inputValue();
        const email = await reservationModal.emailInput.inputValue();

        const dialogPromise = page.waitForEvent('dialog');
        await reservationModal.submitWithWorkaround();
        const dialog = await dialogPromise;

        expect(dialog.message()).toContain('Fehler');
        await dialog.accept();
        await expect(reservationModal.modal).toBeVisible();
        await expect(reservationModal.surnameInput).toHaveValue(surname);
        await expect(reservationModal.emailInput).toHaveValue(email);
        await expect(reservationModal.successModal).toBeHidden();
    });

    test('TC-W54: Reservierungs-Request mit 500 zeigt kontrollierten Fehlerzustand', async ({ page }) => {
        await mockFormspree(page, 500, { error: 'Internal Server Error' });
        const reservationModal = await openReservation(page);

        const dialogPromise = page.waitForEvent('dialog');
        await reservationModal.submitWithWorkaround();
        const dialog = await dialogPromise;

        expect(dialog.message()).toContain('Fehler');
        await dialog.accept();
        await expect(reservationModal.modal).toBeVisible();
        await expect(reservationModal.successModal).toBeHidden();
    });

    test('TC-W55: Kontaktformular behandelt einen abgebrochenen Formspree-Request', async ({ page }) => {
        // Bekannter Bug: Bei einem Offline-Request wird kein sichtbarer Fehlerhinweis angezeigt.
        test.fail(true, 'BUG-001: Offline-Fehler des Kontaktformulars wird nicht angezeigt');
        test.setTimeout(10000);
        await page.route(FORMSPREE_URL, async route => {
            await route.abort('internetdisconnected');
        });

        const homePage = new HomePage(page);
        const contactForm = new ContactForm(page);
        await homePage.goto();
        await contactForm.scrollToForm();
        await expect(contactForm.form).toBeVisible();
        await contactForm.fill();

        let dialogMessage = null;
        page.on('dialog', async dialog => {
            dialogMessage = dialog.message();
            await dialog.accept();
        });
        await contactForm.submit();
        await page.waitForTimeout(1000);

        expect(dialogMessage).toContain('Verbindungsfehler');
        await expect(contactForm.successModal).toBeHidden();
    });

    test('TC-W56: Doppelklick auf Reservierungs-Submit sendet nur einen Request', async ({ page }) => {
        // Bekannter Bug: Der Submit-Button verhindert keine doppelten Formspree-Requests.
        test.fail(true, 'BUG-002: Doppelklick sendet zwei Formspree-Requests');
        let requestCount = 0;
        await page.route(FORMSPREE_URL, async route => {
            requestCount++;
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ ok: true })
            });
        });

        const reservationModal = await openReservation(page);
        await reservationModal.submitButton.evaluate(button => {
            button.click();
            button.click();
        });
        await expect.poll(() => requestCount).toBeGreaterThan(0);

        expect(requestCount).toBe(1);
    });
});
