const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page-objects/homePage');

test.describe('Social Media', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);
        await homePage.goto();
        await homePage.clickSocial();

        const socialSection = page.locator('#social');
        await expect(socialSection).toBeInViewport();
    });

    test('TC-W37: Social-Kanäle: Icons  vollständig sichtbar', async ({ page }) => {

        const socialInstagram = page.locator('#social-header-instagram-link');
        const facebookLink = page.locator('#social-header-facebook-link');

        await expect(socialInstagram).toBeVisible();

        await expect(facebookLink).toBeVisible();

    });

    test('TC-W38: Social-Media-Icons führen zu korrekten externen Links', async ({ page }) => {
        const socialInstagram = page.locator('#social-header-instagram-link');

        await expect(socialInstagram).toHaveAttribute('href', 'https://www.instagram.com/riquethaus/');
        await expect(socialInstagram).toHaveAttribute('target', '_blank');

        const facebookLink = page.locator('#social-header-facebook-link');
        await expect(socialInstagram).toHaveAttribute('target', '_blank');


        const [instagramPage] = await Promise.all([page.waitForEvent('popup'), socialInstagram.click()]);

        await expect(instagramPage).toHaveURL(/instagram\.com/);

        await instagramPage.close();

        const [facebookPage] = await Promise.all([page.waitForEvent('popup'), facebookLink.click()]);

        await expect(facebookPage).toHaveURL(/facebook\.com/);

        await facebookPage.close();
    });
});