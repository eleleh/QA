class ReservationModal {
  constructor(page) {
    this.page = page;
    this.modal = page.locator('#reservationModal');
    this.form = page.locator('#reservationForm');
    this.closeButton = page.locator('.reservation-close-btn');
    this.surnameInput = page.locator('#reservation-surname');
    this.dateInput = page.locator('#reservation-date');
    this.guestsInput = page.locator('#reservation-guests');
    this.timeFromInput = page.locator('#reservation-time-from');
    this.timeToInput = page.locator('#reservation-time-to');
    this.emailInput = page.locator('#reservation-email');
    this.submitButton = page.locator('#reservation-submit-btn');
    // Error message div
    this.errorDiv = page.locator('#reservationFormErrors');
    // Success Confirmation Modal
    this.successModal = page.locator('#reservationSuccessConfirmation');
    this.successCloseButton = page.locator('.reservation-confirm-close-btn');
    this.successOkButton = page.locator('#closeReservationConfirmBtn');;
  }

  async waitForOpen() {
    await this.modal.waitFor({ state: 'visible', timeout: 15000 });
  }

  async close() {
    await this.closeButton.click();
    await this.modal.waitFor({ state: 'hidden', timeout: 15000 });
  }

  async fill({
    surname = 'Mustermann',
    email = 'max@example.com',
    date = null,
    timeFrom = '19:30',
    timeTo = '21:00',
    guests = '2'
  } = {}) {
    const merged = { surname, email, date, timeFrom, timeTo, guests };
    await this.surnameInput.fill(merged.surname);
    await this.emailInput.fill(merged.email);
    if (merged.date != null) {
      await this.dateInput.fill(merged.date);
    }
    else {
      await this.dateInput.fill(this.getTomorrowDate());
    }

    await this.guestsInput.fill(merged.guests);
    await this.timeFromInput.fill(merged.timeFrom);
    await this.timeToInput.fill(merged.timeTo);
  }



  getTomorrowDate() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
  }

  async submit() {
    await this.submitButton.evaluate(button => {
      button.click();
    });
  }

  async submitWithWorkaround() {
    await this.page
      .getByRole('heading', {
        name: 'Tischreservierung',
        exact: true
      })
      .click();

    await this.submit();
  }

  async getErrorMessage() {
    const ErrorIsVisible = await this.errorDiv.isVisible();
    if (ErrorIsVisible) {
      return await this.errorDiv.textContent();
    }
    return null;
  }

  async isErrorDisplayed() {
    return await this.errorDiv.isVisible();
  }

  async waitForErrorToDisappear() {
    await this.errorDiv.waitFor({ state: 'hidden', timeout: 5000 });
  }

  async waitForSuccessModal() {
    await this.successModal.waitFor({ state: 'visible', timeout: 15000 });
  }

  async closeSuccessModal() {
    await this.successOkButton.click();
    await this.successModal.waitFor({ state: 'hidden', timeout: 5000 });
  }

  async closeSuccessModalByX() {
    await this.successCloseButton.click();
    await this.successModal.waitFor({ state: 'hidden', timeout: 5000 });
  }

  async isSuccessModalDisplayed() {
    return await this.successModal.isVisible();
  }

  async fillAndSubmitValid() {
    await this.fill();
    await this.submit();
  }
}

module.exports = { ReservationModal };
