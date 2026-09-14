class PodcastSection {
  constructor(page) {
    this.page = page;

    this.section = page.locator('#podcast');
    this.title = this.section.locator('.media-header h2');
    this.episodes = this.section.locator('.podcast-episode');
  }

  episode(episodeNumber) {
    return this.episodes.nth(episodeNumber - 1);
  }

  episodeTitle(episodeNumber) {
    return this.episode(episodeNumber).locator('h4');
  }

  episodeDescription(episodeNumber) {
    return this.episode(episodeNumber).locator('.episode-description');
  }

  playButton(episodeNumber) {
    return this.episode(episodeNumber).locator('.play-button');
  }

  progressBar(episodeNumber) {
    return this.episode(episodeNumber).locator('.progress-bar');
  }

  timeDisplay(episodeNumber) {
    return this.episode(episodeNumber).locator('.player-time');
  }

  async scrollToSection() {
    await this.section.scrollIntoViewIfNeeded();
  }

  async playEpisode(episodeNumber) {
    await this.playButton(episodeNumber).click();
  }

  async pauseEpisode(episodeNumber) {
    await this.playButton(episodeNumber).click();
  }

  async isPlaying(episodeNumber) {
    const className = await this.playButton(episodeNumber).getAttribute('class');

    return className?.includes('playing') ?? false;
  }
  
  audio(episodeNumber) {
    return this.episode(episodeNumber).locator('audio');
  }

  async isAudioPlaying(episodeNumber) {
    return await this.audio(episodeNumber).evaluate(
      audio => !audio.paused
    );
  }

  async getProgressPercent(progressBar) {
    const style = await progressBar.getAttribute('style');

    const match = style?.match(/width:\s*([\d.]+)%/);

    return match ? Number(match[1]) : 0;
  }


}

module.exports = { PodcastSection };
