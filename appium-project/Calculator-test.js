const wd = require('wd');

const desiredCaps = {
  platformName: 'Android',
  deviceName: 'emulator-5554',
  app: __dirname + '/.Calculator.apk',
  automationName: 'UiAutomator2',
};

// Update the server URL to match the Appium server running on port 4727
const serverUrl = 'https://127.0.0.1:4727/wd/hub';
const driver = wd.promiseChainRemote(serverUrl);

async function main() {
  try {
    await driver.init(desiredCaps);
    // Add your test steps here
  } finally {
    await driver.quit();
  }
}

main();
