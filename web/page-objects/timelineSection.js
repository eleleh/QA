class TimelineSection {
  constructor(page) {
    this.page = page;

    this.section = page.locator('#timeline');
    this.progressIndicators = page.locator('.progress-indicators');
    this.progressDots = page.locator('.progress-dot');

    this.accordionHeader = page.locator('#timelineAccordion');
    this.accordionWrapper = page.locator('.timeline-accordion-wrapper');

    this.triggerBoxes = page.locator('.trigger-box');
    this.carouselPrevArrow = page.locator('.timeline-carousel-prev');
    this.carouselNextArrow = page.locator('.timeline-carousel-next');
    this.carouselVideos = page.locator('.timeline-video-item video');
    this.videoPlayButtons = page.locator('.timeline-play-btn');

  }

  async scrollToSection() {
    await this.section.scrollIntoViewIfNeeded();
  }

  timelinePoint(index) {
    return this.progressDots.nth(index);
  }

  firstTimelinePoint() {
    return this.progressDots.first();
  }

  lastTimelinePoint() {
    return this.progressDots.last();
  }

  async scrollToTimelinePoints() {
    await this.section.evaluate((element) => {
      element.scrollIntoView({
        behavior: 'instant',
        block: 'center',
        inline: 'nearest'
      });
    });
  }
  async scrollPointToCenter(point) {
    await point.evaluate((element) => {
      element.scrollIntoView({
        behavior: 'instant',
        block: 'center',
        inline: 'nearest'
      });
    });
  }

  async clickTimelinePoint(index) {
    const point = this.timelinePoint(index);

    //await this.scrollPointToCenter(point);
    await point.click();
  }

  async clickLastTimelinePoint() {
    const point = this.lastTimelinePoint();

    await this.scrollPointToCenter(point);
    await point.click();
  }

  async getPointTitle(index) {
    return this.timelinePoint(index).getAttribute('title');
  }

  async getPointYearLabel(index) {
    return this.timelinePoint(index).locator('.dot-label').textContent();
  }

  async clickNextCarouselItem() {
    await this.carouselNextArrow.click();
  }

  async clickPreviousCarouselItem() {
    await this.carouselPrevArrow.click();
  }

  carouselVideo(index) {
    return this.carouselVideos.nth(index);
  }
}

module.exports = { TimelineSection };
