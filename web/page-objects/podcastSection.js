class PodcastSection {
    constructor(page) {
    this.page = page;
    this.section = page.locator('#podcast');
    this.episodes = page.locator('.podcast-episode');
  }

  async playEpisode(episodeNumber) {
    const episode = this.episodes.nth(episodeNumber - 1);
    const playButton = episode.locator('.play-button');
    await playButton.click();
  }

    async pauseEpisode(episodeNumber) {
    const episode = this.episodes.nth(episodeNumber - 1);
    const playButton = episode.locator('.play-button');
    await playButton.click();
  }

   async isPlaying(episodeNumber) {
    const episode = this.episodes.nth(episodeNumber - 1);
    const playButton = episode.locator('.play-button');
    const className = await playButton.getAttribute('class');
    return className.includes('playing');
  }

    async getProgressBar(episodeNumber) {
    const episode = this.episodes.nth(episodeNumber - 1);
    return episode.locator('.progress-bar');
  }

   async getTimeDisplay(episodeNumber) {
    const episode = this.episodes.nth(episodeNumber - 1);
    const timeDisplay = episode.locator('.player-time');
    return await timeDisplay.textContent();
  }

  async getEpisodeTitle(episodeNumber) {
    const episode = this.episodes.nth(episodeNumber - 1);
    const title = episode.locator('h4');
    return await title.textContent();
  }

   async getEpisodeDescription(episodeNumber) {
    const episode = this.episodes.nth(episodeNumber - 1);
    const description = episode.locator('.episode-description');
    return await description.textContent();
  }

}

module.exports = { PodcastSection };
