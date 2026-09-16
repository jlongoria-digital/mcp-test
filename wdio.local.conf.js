exports.config = {
  runner: 'local',
  port: 4723,
  specs: [
    './dai-bank-login-test.js'
  ],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554',  // Update with your device
    'appium:app': 'com.daibank.mobile',
    'appium:appActivity': '.MainActivity',
    'appium:noReset': true
  }],
  // Connect to local Appium server
  protocol: 'http',
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub/'
};
