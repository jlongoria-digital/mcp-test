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
    'appium:deviceName': 'Samsung Galaxy A8',
    'appium:app': 'com.daibank.mobile',
    'appium:appActivity': '.MainActivity',
    'appium:noReset': true,
    'digitalai:deviceQuery': "@os='android' and @category='PHONE' and @region='US2'",
    'digitalai:accessKey': process.env.DIGITAL_AI_ACCESS_KEY,
    'digitalai:baseUrl': process.env.DIGITAL_AI_BASE_URL
  }],
  services: ['appium'],
  appium: {
    logLevel: 'info'
  }
};
