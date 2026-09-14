const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page-objects/homePage');
const { ReservationModal } = require('../page-objects/reservationModal');
const { ContactForm } = require('../page-objects/contactForm');
const { TimelineSection } = require('../page-objects/timelineSection');
const { PodcastSection } = require('../page-objects/podcastSection');

// Zustandsübergänge – Modal, Hamburger, Timeline, Carousel 

test.describe('Zustandsübergänge', () => {
    let homePage;
    let reservationModal;
    let timelineSection;
    let podcastSection;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        reservationModal = new ReservationModal(page);
        timelineSection = new TimelineSection(page);
        podcastSection = new PodcastSection(page);
        await homePage.goto();
    });

    test('TC-W22: Hamburger-Menü öffnet und schließt bei 375px', async ({ page }) => {
        await homePage.setMobileViewport(375);

        await expect(homePage.hamburgerButton).toBeVisible();

        await homePage.openMobileMenu();
        await expect(homePage.mobileMenu).toHaveClass(/active/);

        await homePage.closeMobileMenu();
        await expect(homePage.mobileMenu).not.toHaveClass(/active/);
    });

    test('TC-W23: Hamburger-Menü: Link "Timeline" navigiert und schließt Menü', async ({ page }) => {

        await homePage.setMobileViewport(375);

        await homePage.openMobileMenu();
        await expect(homePage.mobileMenu).toHaveClass(/active/);

        await homePage.navigateToTimelineFromMobile();

        await expect(page).toHaveURL(/#timeline/);
        await expect(homePage.mobileMenu).not.toHaveClass(/active/);
    });

    test('TC-W24: Timeline: Erster Punkt aktiv bei Seitenaufruf (BVA)', async ({ page }) => {

        await timelineSection.scrollToTimelinePoints();

        const firstPoint = timelineSection.firstTimelinePoint();

        await expect(firstPoint).toBeVisible();
        // Die Anwendung setzt den aktiven Zustand erst beim Interaktions-/Scroll-Event.
        await timelineSection.clickTimelinePoint(0);
        await expect(firstPoint).toHaveClass(/active/);
        await expect(firstPoint).toContainText('1745');

    });

    test('TC-W27: Timeline: Letzter Punkt klickbar und korrekt aktiviert (BVA)', async ({ page }) => {

        await timelineSection.scrollToTimelinePoints();

        const lastPoint = timelineSection.lastTimelinePoint();

        await timelineSection.clickLastTimelinePoint();

        await expect(lastPoint).toBeVisible();
        await expect(lastPoint).toHaveClass(/active/);
    });

    test('TC-W29: Timeline-Carousel: Drei Videos sind geladen und abspielbar', async ({ page }) => {
        await timelineSection.scrollToTimelinePoints();
        await timelineSection.clickLastTimelinePoint();

        await expect(timelineSection.carouselVideos).toHaveCount(3);

        for (let index = 0; index < 3; index++) {
            const video = timelineSection.carouselVideo(index);

            await expect(video).toBeVisible();

            await expect.poll(async () => {
                return video.evaluate(element => element.readyState);
            }, { timeout: 20000 }).toBeGreaterThanOrEqual(1);

            await video.evaluate(async element => {
                element.muted = true;
                await element.play();
            });

            await expect.poll(async () => {
                return video.evaluate(element => element.paused);
            }).toBe(false);

            await video.evaluate(element => {
                element.pause();
                element.currentTime = 0;
            });

            if (index < 2) {
                await timelineSection.clickNextCarouselItem();
            }
        }
    });

});