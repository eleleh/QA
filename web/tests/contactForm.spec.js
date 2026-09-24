const { test, expect } = require('@playwright/test');

const { HomePage } = require('../page-objects/homePage');
const { ContactForm } = require('../page-objects/contactForm');

const contactValidationCases = [
    {
        id: 'TC-W47',
        title: 'Name unter 2 Zeichen wird abgelehnt',
        data: {
            name: 'M'
        },
        expectedError: /name.*mindestens.*2.*zeichen/i
    },
    {
        id: 'TC-W48',
        title: 'E-Mail-Format ungültig wird abgelehnt',
        data: {
            email: 'max@'
        },
        expectedError: /e-?mail.*gültig|gültige.*e-?mail/i
    },
    {
        id: 'TC-W49',
        title: 'Nachricht unter 10 Zeichen wird abgelehnt',
        data: {
            message: 'Hallo'
        },
        expectedError: /nachricht.*mindestens.*10.*zeichen/i
    }
];

test.describe('Kontaktformular – Feldvalidierung', () => {
    let homePage;
    let contactForm;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        contactForm = new ContactForm(page);

        await homePage.goto();

        await contactForm.scrollToForm();
        await expect(contactForm.form).toBeVisible({ timeout: 15000 });
        await expect(contactForm.form).toBeInViewport();

        await expect(contactForm.nameInput).toHaveValue('');
        await expect(contactForm.emailInput).toHaveValue('');
        await expect(contactForm.messageInput).toHaveValue('');
    });

    for (const { id, title, data, expectedError } of contactValidationCases) {
        
        test(`${id}: Kontaktformular – ${title}`, async () => {
            await contactForm.fill(data);

            await contactForm.submit();

            await expect(contactForm.errorDiv).toBeVisible();

            await expect(contactForm.errorDiv).toContainText(
                expectedError
            );

            await expect(contactForm.successModal).toBeHidden();
        });
    }
});