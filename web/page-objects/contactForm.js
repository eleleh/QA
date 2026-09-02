class ContactForm {
  constructor(page) {
    this.page = page;
    this.form = page.locator('#contactForm');
    this.nameInput = page.locator('#contact-name');
    this.emailInput = page.locator('#contact-email');
    this.messageInput = page.locator('#contact-message');
    this.submitButton = page.locator('#contact-submit-btn');
    this.errorDiv = page.locator('#contactFormErrors');
    // Success confirmation modal
    this.successModal = page.locator('#contactSuccessConfirmation');
    this.closeButton = page.locator('#contactSuccessConfirmation .close-btn');
    this.okButton = page.locator('#closeModalBtn');
  }

  async fill({ name = 'Max Mustermann', email = 'max@example.com', message = 'Guten Tag! Dies ist eine gültige Testnachricht.' } = {}) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
  }

  async submit() {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }

  async waitForSuccessModal() {
    await this.successModal.waitFor({ state: 'visible', timeout: 15000 });
  }
  async closeSuccessModal() {
    await this.okButton.click();
    await this.successModal.waitFor({ state: 'hidden', timeout: 5000 });
  }

  async closeSuccessModalByX() {
    await this.closeButton.click();
    await this.successModal.waitFor({ state: 'hidden', timeout: 5000 });
  }

  async isSuccessModalDisplayed() {
    return await this.successModal.isVisible();
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

  async fillAndSubmitValid() {
    await this.fill();
    await this.submit();
  }

}

module.exports = { ContactForm };
