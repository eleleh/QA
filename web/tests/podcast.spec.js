const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page-objects/homePage');
const { PodcastSection } = require('../page-objects/podcastSection');

test.describe('Podcast', () => {
    let homePage;
    let podcastSection;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);
        podcastSection = new PodcastSection(page);
        await homePage.goto();
        await homePage.clickPodcast();

        await expect(podcastSection.section).toBeInViewport();
    });

    test('TC-W32: Podcast-Sektion vollständig sichtbar (Titel, Player, Playtime)', async ({ page }) => {

        await expect(podcastSection.title).toHaveText('Geschichte zum Anhören');

        await expect(podcastSection.episodeTitle(1)).toContainText('Episode 1:');

        await expect(podcastSection.episodeDescription(1)).toContainText('Mit nur 16 Jahren kommt Jean George Riquet 1745 nach Leipzig.');

        await expect(podcastSection.playButton(1)).toBeVisible();

        await expect(podcastSection.timeDisplay(1)).toContainText('3:26');

    });

    test('TC-W33: Podcast-Audio-Player: Play startet Audio, Balken und Zeit aktualisieren sich', async ({
        page
    }) => {

        const progressBar = podcastSection.progressBar(1);
        const timeDisplay = podcastSection.timeDisplay(1);
        const playButton = podcastSection.playButton(1);

        const progressBefore = await podcastSection.getProgressPercent(progressBar);

        const timeBefore = (await timeDisplay.textContent())?.trim();

        await expect(playButton).toBeVisible();

        await podcastSection.playEpisode(1);

        await expect(podcastSection.isPlaying(1)).resolves.toBe(true);

        await expect(podcastSection.isAudioPlaying(1)).resolves.toBe(true);
        await expect(playButton).toHaveClass(/playing/);

        await expect.poll(async () => {
            return await podcastSection.getProgressPercent(progressBar);
        }, {
            timeout: 10000,
            message: 'Der Fortschrittsbalken muss nach Start der Episode größer werden.'
        }).toBeGreaterThan(progressBefore);

        await expect.poll(async () => {
            return (
                await timeDisplay.textContent()
            )?.trim();
        }, {
            timeout: 10000,
            message: 'Die Zeitanzeige muss sich nach Start der Episode verändern.'
        }).not.toBe(timeBefore);
    });

    test('TC-W34: Podcast-Audio-Player: Pause stoppt Audio, Balken und Zeit bleiben stehen', async ({
        page
    }) => {

        const progressBar = podcastSection.progressBar(1);
        const timeDisplay = podcastSection.timeDisplay(1);
        const playButton = podcastSection.playButton(1);

        await podcastSection.playEpisode(1);

        await expect(podcastSection.isPlaying(1)).resolves.toBe(true);

        await expect.poll(async () => {
            return await podcastSection.getProgressPercent(progressBar);
        }, {
            timeout: 10000,
            message: 'Der Podcast muss vor dem Pausieren einen Fortschritt anzeigen.'
        }).toBeGreaterThan(0);

        await podcastSection.pauseEpisode(1);

        await expect(podcastSection.isPlaying(1)).resolves.toBe(false);

        await expect(playButton).not.toHaveClass(/playing/);

        const progressAfterPause = await podcastSection.getProgressPercent(progressBar);

        const timeAfterPause = (await timeDisplay.textContent())?.trim();

        await page.waitForTimeout(1500);

        const progressLater = await podcastSection.getProgressPercent(progressBar);

        const timeLater = (await timeDisplay.textContent())?.trim();

        expect(progressLater).toBe(progressAfterPause);

        expect(timeLater).toBe(timeAfterPause);
    });

});
