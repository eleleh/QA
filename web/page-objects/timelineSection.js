class TimelineSection {
  constructor(page) {
    this.page = page;
    this.section = page.locator('#timeline');
    this.accordionHeader = page.locator('#timelineAccordion');
    this.accordionWrapper = page.locator('.timeline-accordion-wrapper');
    this.progressDots = page.locator('.progress-dot');
    this.triggerBoxes = page.locator('.trigger-box');
    this.carouselPrevArrow = page.locator('.timeline-carousel-prev');
    this.carouselNextArrow = page.locator('.timeline-carousel-next');
    this.carouselVideos = page.locator('.timeline-video-item');
    this.videoPlayButtons = page.locator('.timeline-play-btn');
  }

  async scrollToSection() {
    await this.section.scrollIntoViewIfNeeded();
  }

  async clickTimelinePoint(index) {
    const dot = this.progressDots.nth(index);
    await dot.scrollIntoViewIfNeeded();
    await dot.click();
  }

  async isPointActive(index) {
    return this.progressDots.nth(index).evaluate((element) => {
      return element.classList.contains('active');
    });
  }

  async getPointTitle(index) {
    return this.progressDots.nth(index).getAttribute('title');
  }

  async getPointTitle(stepIndex) {
    const dot = this.page.locator(`#progress-dot-${stepIndex}`);
    return dot.getAttribute('title');
  }

  async getPointYearLabel(index) {
    const dot = this.progressDots.nth(index);
    const label = dot.locator('.dot-label');
    return await label.textContent();
  }
}


module.exports = { TimelineSection };
