const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 60 * 1000,

  expect: {
    timeout: 5000
  },

  fullyParallel: false,
  forbidOnly: !!process.env.CI,

  reporter: [
    ['html', { outputFolder: 'reports', open: 'never' }],
    ['list']
  ],

  use: {
    baseURL: 'https://kaffeehaus-riquet.netlify.app',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    navigationTimeout: 30000
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});