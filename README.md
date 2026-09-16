# DAI Bank Test Automation

Automated test suite for DAI Bank mobile app using WebdriverIO and Appium.

## Overview

This project contains automated tests for the DAI Bank Android mobile application, specifically testing the login functionality with both valid and invalid credentials.

## Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **npm** 9+ (comes with Node.js)
- **Java** 11+ (required for Appium and Android testing)
- **Android SDK** (or use Appium Doctor to check)
- **Appium 2.0+** (installed globally or via npm)

## Installation

### 1. Clone or download this repository

```bash
git clone <repo-url>
cd dai-bank-test-automation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Appium and Android drivers

```bash
# Install Appium globally (optional, can use local npm install)
npm install -g appium

# Install required Android driver
npm run install:drivers
```

### 4. Configure environment variables

Create a `.env` file in the project root (copy from `.env.example`):

```bash
cp .env.example .env
```

Then edit `.env` and add your Digital.ai credentials:

```env
DIGITAL_AI_BASE_URL=https://your-tenant.experitest.com
DIGITAL_AI_ACCESS_KEY=your-access-key-here
```

**Get your credentials:**
1. Log in to Digital.ai Testing portal
2. Click your name/avatar → Access Key
3. Copy your key and paste into `.env`

## Running Tests

### Run against Digital.ai device farm

```bash
npm test
```

### Run against local Appium server

First start Appium:

```bash
npm run appium
```

Then in another terminal:

```bash
npm run test:local
```

## Test Scenarios

### 1. Valid Login Test
- **Username:** admin
- **Password:** password
- **Expected:** Successful login, navigation away from login screen

### 2. Invalid Password Test
- **Username:** admin
- **Password:** something
- **Expected:** Login fails, remains on login screen with error

## Project Structure

```
dai-bank-test-automation/
├── package.json                  # Dependencies and scripts
├── wdio.conf.js                 # WebdriverIO config for Digital.ai
├── wdio.local.conf.js           # WebdriverIO config for local testing
├── dai-bank-login-test.js       # Main test file
├── README.md                     # This file
├── .gitignore                    # Git ignore rules
├── .env.example                  # Environment variables template
└── node_modules/                # Dependencies (created after npm install)
```

## Configuration Files

### wdio.conf.js
Configuration for running tests against Digital.ai Testing device farm.

### wdio.local.conf.js
Configuration for running tests against a local Appium server.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DIGITAL_AI_BASE_URL` | Yes | Your Digital.ai tenant URL |
| `DIGITAL_AI_ACCESS_KEY` | Yes | Your Digital.ai access key |

**Never commit your `.env` file to git!** It's already in `.gitignore`.

## Test Details

### Element Selectors (Verified)

- **Username field:** `//android.widget.EditText[1]`
- **Password field:** `//android.widget.EditText[2]`
- **Sign In button:** `//*[@text='Sign In']/parent::*`

These selectors were captured from a live inspection session on the actual DAI Bank application.

## Troubleshooting

### "Cannot find appium" error
Install Appium globally or locally:
```bash
npm install -g appium
# or
npm install --save-dev appium
```

### "Couldn't find plugin 'local' runner"
Install the WebdriverIO local runner:
```bash
npm install --save-dev @wdio/local-runner
```

### Device connection issues
- Ensure your device/emulator is connected and visible to adb
- Check device status: `adb devices`
- Verify network connectivity to Digital.ai farm

### Appium driver issues
Install the required Android driver:
```bash
npm run install:drivers
```

## Contributing

When adding new tests:
1. Capture real element selectors from an inspection session
2. Use the established naming conventions
3. Add both positive and negative test cases
4. Update this README with new test scenarios

## License

MIT

## Support

For issues with the Digital.ai Testing platform, visit: https://uscloud.experitest.com

For Appium documentation: https://appium.io/docs/

For WebdriverIO documentation: https://webdriver.io/docs/
