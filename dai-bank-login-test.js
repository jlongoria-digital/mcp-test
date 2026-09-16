const { remote } = require('webdriverio');

describe('DAI Bank Login Test', () => {
  let driver;

  before(async () => {
    const opts = {
      path: '/wd/hub',
      port: 4723,
      capabilities: {
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Samsung Galaxy A8',
        'appium:app': 'com.daibank.mobile',
        'appium:appActivity': '.MainActivity',
        'appium:noReset': true,
        'digitalai:deviceQuery': "@os='android' and @category='PHONE' and @region='US2'",
        'digitalai:accessKey': process.env.DIGITAL_AI_ACCESS_KEY,
        'digitalai:baseUrl': process.env.DIGITAL_AI_BASE_URL
      }
    };

    driver = await remote(opts);
  });

  after(async () => {
    if (driver) {
      await driver.deleteSession();
    }
  });

  it('should login successfully with valid credentials', async () => {
    // Find and interact with username field
    const usernameField = await driver.$('//android.widget.EditText[1]');
    await usernameField.click();
    await usernameField.clearValue();
    await usernameField.setValue('admin');

    // Find and interact with password field
    const passwordField = await driver.$('//android.widget.EditText[2]');
    await passwordField.click();
    await passwordField.clearValue();
    await passwordField.setValue('password');

    // Find and click Sign In button
    const signInButton = await driver.$("//*[@text='Sign In']/parent::*");
    await signInButton.click();

    // Wait for success indication (e.g., navigation to dashboard)
    await driver.pause(2000);

    // Verify successful login - you can add assertions here
    // For example: check if we navigated away from login screen
    const loginScreen = await driver.$('//*[@text="Banking"]');
    const isPresent = await loginScreen.isExisting();

    // If we're still on login, it failed
    expect(!isPresent || isPresent === false).toBe(true);
  });

  it('should show error with invalid password', async () => {
    // Wait for app to reset or navigate back to login
    await driver.pause(1000);

    // Clear previous credentials if still present
    const usernameField = await driver.$('//android.widget.EditText[1]');
    await usernameField.click();
    await usernameField.clearValue();
    await usernameField.setValue('admin');

    const passwordField = await driver.$('//android.widget.EditText[2]');
    await passwordField.click();
    await passwordField.clearValue();
    await passwordField.setValue('something');

    const signInButton = await driver.$("//*[@text='Sign In']/parent::*");
    await signInButton.click();

    // Wait for error response
    await driver.pause(2000);

    // Verify error message appears or we stay on login screen
    const loginScreen = await driver.$('//*[@text="Banking"]');
    const isPresent = await loginScreen.isExisting();

    // We should still be on login screen with error
    expect(isPresent).toBe(true);
  });
});
