const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page-objects/homePage');
const { ReservationModal } = require('../page-objects/reservationModal');
const { ContactForm } = require('../page-objects/contactForm');
const { TimelineSection } = require('../page-objects/timelineSection');
const { PodcastSection } = require('../page-objects/podcastSection');

/**
 * SMOKE TEST SUITE – Kaffeehaus Riquet
 */



test.describe('Smoke Suite – Web Medienprojekt', () => {
  let homePage;
  let reservationModal;
  let contactForm;
  let timelineSection;
  let podcastSection;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    reservationModal = new ReservationModal(page);
    contactForm = new ContactForm(page);
    timelineSection = new TimelineSection(page);
    podcastSection = new PodcastSection(page);
    await homePage.goto();
  });

  test('TC-W01: Startseite lädt vollständig', async ({ page }) => {
    await expect(page).toHaveTitle(/Riquet|Kaffeehaus/i);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('#timeline')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  //---NAVIGAION TESTS---

  test('TC-W02: Navbar-Link Timeline scrollt zur Historiesektion', async ({ page }) => {
    await homePage.clickTimeline();

    await expect(page.locator('#timeline')).toBeInViewport();
    await expect(page.locator('#timeline h2')).toBeVisible();
  });

  test('TC-W06: Reservieren-Button öffnet das Modal', async () => {
    await homePage.clickReserve();

    await reservationModal.waitForOpen();
    await expect(reservationModal.modal).toBeVisible();
    await expect(reservationModal.form).toBeVisible();
  });


  test('TC-W07: Button „Die Geschichte erkunden“ scrollt zur Historiesektion', async ({ page }) => {
    await homePage.clickHistoryCta();

    await expect(page.locator('#timeline')).toBeInViewport();
    await expect(page.locator('#timeline h2')).toBeVisible();
  });

  //--- FORM TESTS ---

  test('TC-W09: Leeres Reservierungsformular wird nicht abgesendet', async ({ page }) => {
    await homePage.clickReserve();
    await reservationModal.waitForOpen();

    await reservationModal.submit();

    await expect(reservationModal.modal).toBeVisible();

    // Native required-Validation oder eigene Fehlermeldung
    const nativeValidation = await reservationModal.form.evaluate(form => !form.checkValidity());
    const customErrorVisible = await reservationModal.isErrorDisplayed();
    expect(nativeValidation || customErrorVisible).toBe(true);
  });

  test('TC-W19: Erfolgreiche Reservierung mit gültigen Daten', async ({ page }) => {
    await homePage.clickReserve();
    await reservationModal.waitForOpen();

    await reservationModal.fill();

    await reservationModal.submitWithWorkaround();

    await reservationModal.waitForSuccessModal();
    await expect(
      reservationModal.successModal
    ).toBeVisible();

    await reservationModal.closeSuccessModal();

    await expect(
      reservationModal.successModal
    ).toBeHidden();
  });

  test('TC-W20: Erfolgreiche Kontaktanfrage mit gültigen Daten', async ({ page }) => {
    await contactForm.fillAndSubmitValid();

    // Warten auf das Success-Modal und schließen
    await contactForm.waitForSuccessModal();
    await contactForm.closeSuccessModal();
    await expect(contactForm.successModal).toBeHidden();
  });

  test('TC-W21: Leeres Kontaktformular wird nicht abgesendet', async ({ page }) => {
    await contactForm.submit();

    await expect(contactForm.form).toBeVisible();

    // Native required-Validation oder eigene Fehlermeldung 
    const nativeValidation = await contactForm.form.evaluate(form => !form.checkValidity());
    const customErrorVisible = await contactForm.isErrorDisplayed();
    expect(nativeValidation || customErrorVisible).toBe(true);
  });



  // ---TIMELINE TESTS---

  test('TC-W26: Timeline-Punkte sind klickbar und aktivieren die jeweilige Epoche', async ({ page }) => {
    await timelineSection.scrollToSection();

    const pointCount = await timelineSection.progressDots.count();
    expect(pointCount).toBeGreaterThan(0);

    for (let i = 0; i < pointCount; i++) {
      await timelineSection.clickTimelinePoint(i);

      await expect(timelineSection.progressDots.nth(i)).toHaveClass(/active/);
      await expect(timelineSection.triggerBoxes.nth(i)).toHaveClass(/active/);
    }
  });

  test('TC-W28: Carousel-Pfeile navigieren durch die Videos', async ({ page }) => {
    await timelineSection.scrollToSection();

    const lastPointIndex = (await timelineSection.progressDots.count()) - 1;
    await timelineSection.clickTimelinePoint(lastPointIndex);

    await expect(timelineSection.carouselVideos.first()).toBeVisible();

    await timelineSection.carouselNextArrow.click();
    await expect(timelineSection.carouselVideos.nth(1)).toBeVisible();

    await timelineSection.carouselPrevArrow.click();
    await expect(timelineSection.carouselVideos.first()).toBeVisible();
  });

  //---PODCAST TESTS---

  test('TC-W33: Podcast-Play-Button startet Audio', async ({ page }) => {
    await homePage.clickPodcast();
    await expect(podcastSection.section).toBeInViewport();

    const episode = page.locator('#podcast-episode-1');
    const audio = episode.locator('audio');
    const playButton = episode.locator('.play-button');

    await expect(audio).toHaveAttribute('src', /episode.*\.mp3/i);
    await expect(playButton).toBeVisible();

    await playButton.click();

    await expect.poll(async () => {
      return await audio.evaluate(element => !element.paused);
    }, { timeout: 10000 }).toBe(true);

  });

  test('TC-W44: Alle Medien werden angezeigt', async ({ page }) => {
    await page.goto('/');

    const media = page.locator(
      'img:visible, video:visible, audio:visible'
    );

    const count = await media.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await expect(media.nth(i)).toBeVisible();
    }
  });

});
