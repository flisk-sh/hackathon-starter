const { defineConfig, devices } = require('@playwright/test');

// Runs against an already-running `flisk up` (see FLISK.md). It starts no server of its own.
module.exports = defineConfig({
  testDir: '.',
  testMatch: ['*.e2e.test.js'],
  retries: 0,
  workers: 1,
  outputDir: '../../tmp/flisk-e2e-artifacts',
  reporter: [['list']],
  use: { baseURL: process.env.FLISK_E2E_URL || 'http://localhost:8080' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
