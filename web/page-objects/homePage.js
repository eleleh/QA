class HomePage {
  constructor(page) {
    this.page = page;
    this.logoLink = page.locator('#nav-home-link');
    this.timelineLink = page.locator('#nav-timeline-link');
    this.podcastLink = page.locator('#nav-podcast-link');
    this.socialLink = page.locator('#nav-social-link');
    this.angeboteLink = page.locator('#nav-angebote-link');
    this.reserveButton = page.locator('#nav-reserve-btn');
    this.historyCtaButton = page.locator('#hero-cta-btn');
    this.footerQuickLinks = page.locator('footer a');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickTimeline() {
    await this.timelineLink.click();
  }

  async clickPodcast() {
    await this.podcastLink.click();
  }

  async clickSocial() {
    await this.socialLink.click();
  }

  async clickAngebote() {
    await this.angeboteLink.click();
  }

  async clickReserve() {
    await this.reserveButton.click();
  }

  async clickHistoryCta() {
    await this.historyCtaButton.click();
  }

  async clickFooterQuickLink(linkText) {
    const link = this.footerQuickLinks.filter({ hasText: linkText }).first();
    await link.click();
  }

  async goHome() {
    await this.logoLink.click();
  }

  async isHeaderVisible() {
    return await this.page.locator('header').isVisible();
  }

  async isFooterVisible() {
    return await this.page.locator('footer').isVisible();
  }

  async getNavLinks() {
    return await this.page.locator('nav a').allTextContents();
  }
}

module.exports = { HomePage };
