const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page-objects/homePage');
const { ReservationModal } = require('../page-objects/reservationModal');

test.describe('Navigation', () => {
    let homePage;
    let reservationModal;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);
        reservationModal = new ReservationModal(page);
        await homePage.goto();
    });

    test('TC-W03: Podcast" scrollt zur Podcast-Sektion', async ({ page }) => {

        await homePage.clickPodcast();

        await expect(page.locator('#podcast')).toBeInViewport();
        await expect(page.locator('#podcast h2')).toBeVisible();
        await expect(page.locator('#podcast h2')).toHaveText('Geschichte zum Anhören');

    });

    test('TC-W04: Social Kanäle" scrollt zur Sektion', async ({ page }) => {

        await homePage.clickSocial();

        await expect(page.locator('#social')).toBeInViewport();
        await expect(page.locator('#social h2')).toBeVisible();
        await expect(page.locator('#social h2')).toHaveText('@riquethaus');
    });

    test('TC-W05: Angebote" scrollt zur Angebotesektion', async ({ page }) => {
        await homePage.clickAngebote();

        await expect(page.locator('#angebote')).toBeInViewport();
        await expect(page.locator('#angebote h2')).toBeVisible();
        await expect(page.locator('#angebote h2')).toHaveText('Angebote für Sie');
    });

    test('TC-W08: Logo-Link führt zur Startseite zurück', async ({ page }) => {
        await homePage.goHome();

        await homePage.isHeaderVisible();
        await expect(page).toHaveURL(/#home/);
    });

    test.describe('Footer', () => {


        test('TC-W45: Footer Quick Links navigieren zur korrekten Sektion', async ({ page }) => {
            await homePage.clickFooterQuickLink('Timeline');
            await expect(page.locator('#timeline')).toBeInViewport();

            await homePage.clickFooterQuickLink('Podcast');
            await expect(page.locator('#podcast')).toBeInViewport();

            await homePage.clickFooterQuickLink('Social');
            await expect(page.locator('#social')).toBeInViewport();

            await homePage.clickFooterQuickLink('Angebot');
            await expect(page.locator('#specialGalleryScroll')).toBeInViewport();

            const [impressumPage] = await Promise.all([
                page.waitForEvent('popup'),
                homePage.clickFooterQuickLink('Impressum')
            ]);

            await expect(impressumPage).toHaveURL(
                'https://riquethaus.de/kontakt/'
            );

            const [datenschutzPage] = await Promise.all([
                page.waitForEvent('popup'),
                homePage.clickFooterQuickLink('Datenschutz')
            ]);

            await expect(datenschutzPage).toHaveURL(
                'https://riquethaus.de/datenschutz/'
            );

            await datenschutzPage.close();
        });

        test('TC-W44: Footer-Button „Tisch Reservieren“ öffnet das Reservierungsmodal', async ({ page }) => {

            const footerReserveButton = page.locator('#about-location-btn');

            await expect(footerReserveButton).toBeVisible();
            await footerReserveButton.click();

            await expect(reservationModal.modal).toBeVisible();
            await expect(reservationModal.form).toBeVisible();

            await reservationModal.close();

            await expect(reservationModal.modal).toBeHidden();
        });

        test('TC-W51: Footer Social-Media-Icons verlinkt und sichtbar', async ({ page }) => {
            const instagram = page.locator('#footer-instagram-link');
            const facebook = page.locator('#footer-facebook-link');
            const footer = page.locator('.footer-social');

            await footer.scrollIntoViewIfNeeded();

            await expect(instagram).toBeVisible();
            await expect(facebook).toBeVisible();

            const [instagramPage] = await Promise.all([
                page.waitForEvent('popup'),
                instagram.click()
            ]);

            await expect(instagramPage).toHaveURL(
                'https://www.instagram.com/riquethaus/'
            );

            await instagramPage.close();

            const [facebookPage] = await Promise.all([
                page.waitForEvent('popup'),
                facebook.click()
            ]);

            await expect(facebookPage).toHaveURL(
                /facebook\.com\/pages\/Riquet(?:-Kaffeehaus|-Kaffehaus)\/164233723594776/i
            );

            await facebookPage.close();


        });

    });
});
