const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page-objects/homePage');
const { ReservationModal } = require('../page-objects/reservationModal');

const reservationValidationCases = [
    {
        id: 'TC-W10',
        name: 'Namensvalidierung: Nachname unter 2 Zeichen wird abgelehnt',
        data: {
            surname: 'M',
            email: 'max@example.com',
            date: null,
            timeFrom: '19:30',
            timeTo: '21:00',
            guests: '2'
        },
        expectSuccess: false,
        expectedError: 'Nachname muss mindestens 2 Zeichen lang sein'
    },
    {
        id: 'TC-W11',
        name: ' Datumvalidierung: Reservierungsdatum in Vergangenheit nicht zulässig ',
        data: {
            surname: 'Mustermann',
            email: 'max@example.com',
            date: '2020-01-01',
            timeFrom: '19:30',
            timeTo: '21:00',
            guests: '2'
        },
        expectSuccess: false,
        expectedError: 'Das Datum darf nicht in der Vergangenheit liegen'
    },
    {
        id: 'TC-W12',
        name: ' BVA Personen: Wert 1 (unter Minimum) wird abgelehnt',
        data: {
            surname: 'Mustermann',
            email: 'max@example.com',
            date: null,
            timeFrom: '19:30',
            timeTo: '21:00',
            guests: '1'
        },
        expectSuccess: false,
        expectedError: 'Minimum 2 Personen erforderlich.'
    },
    {
        id: 'TC-W13',
        name: 'BVA Personen: Wert 2 (Minimum-Grenzwert) wird akzeptiert',
        data: {
            surname: 'Mustermann',
            email: 'max@example.com',
            date: null,
            timeFrom: '19:30',
            timeTo: '21:00',
            guests: '2'
        },
        expectSuccess: true
    },
    {
        id: 'TC-W14',
        name: 'BVA Personen: Wert 21 (über Maximum) wird abgelehnt',
        data: {
            surname: 'Mustermann',
            email: 'max@example.com',
            date: null,
            timeFrom: '19:30',
            timeTo: '21:00',
            guests: '21'
        },
        expectSuccess: false,
        expectedError: 'Maximum 20 Personen pro Reservierung.'
    },
    {
        id: 'TC-W15',
        name: 'BVA Personen: Wert 20 (Maximum-Grenzwert) wird akzeptiert',
        data: {
            surname: 'Mustermann',
            email: 'max@example.com',
            date: null,
            timeFrom: '19:30',
            timeTo: '21:00',
            guests: '20'
        },
        expectSuccess: true
    },
    {
        id: 'TC-W16',
        name: 'Zeitvalidierung: Von-Zeit nach Bis-Zeit wird abgelehnt',
        data: {
            surname: 'Mustermann',
            email: 'max@example.com',
            date: null,
            timeFrom: '21:30',
            timeTo: '20:00',
            guests: '2'
        },
        expectSuccess: false,
        expectedError: 'Die Endzeit darf nicht vor der Startzeit liegen.'
    },
    {
        id: 'TC-W17',
        name: 'Zeitvalidierung: Buchungsdauer unter 30 Min wird abgelehnt',
        data: {
            surname: 'Mustermann',
            email: 'max@example.com',
            date: null,
            timeFrom: '19:30',
            timeTo: '19:59',
            guests: '2'
        },
        expectSuccess: false,
        expectedError: 'Die Reservierung muss mindestens 30 Minuten dauern.'
    },
    {
        id: 'TC-W18',
        name: 'E-Mail-Format ungültig',
        data: {
            surname: 'Mustermann',
            email: 'max',
            date: null,
            timeFrom: '19:30',
            timeTo: '21:00',
            guests: '2'
        },
        expectSuccess: false,
        expectedError: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    }
];

test.describe('Reservierungsformular', () => {

    let homePage;
    let reservationModal;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        reservationModal = new ReservationModal(page);
        await homePage.goto();
        await homePage.clickReserve();
        await reservationModal.waitForOpen();
        // Alle sichtbaren Eingabefelder sind beim Öffnen leer.
        await expect(reservationModal.surnameInput).toHaveValue('');
        await expect(reservationModal.emailInput).toHaveValue('');
    });


    for (const { id, name, data, expectSuccess, expectedError } of reservationValidationCases) {
        test(`${id}: ${name}`, async () => {
            await reservationModal.fill(data);
            await reservationModal.submit();


            if (expectSuccess) {
                await reservationModal.waitForSuccessModal();
                await expect(reservationModal.successModal).toBeVisible();
                await reservationModal.closeSuccessModal();
            }
            else {
                await expect(reservationModal.errorDiv).toBeVisible();
                const errorMessage = await reservationModal.getErrorMessage();
                expect(errorMessage).toContain(expectedError);
            }
        });
    }
});
