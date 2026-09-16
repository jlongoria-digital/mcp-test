# Quick Setup Instructions

## Step 1: Copy to your repo

Copy all these files to your repository:
- `package.json` - Dependencies and npm scripts
- `wdio.conf.js` - WebdriverIO config for Digital.ai Testing
- `wdio.local.conf.js` - WebdriverIO config for local Appium
- `dai-bank-login-test.js` - The actual test file
- `README.md` - Full documentation
- `.gitignore` - Git ignore rules
- `.env.example` - Environment variable template

## Step 2: Initialize your repo

```bash
cd your-repo-directory

# Initialize git (if not already initialized)
git init

# Copy the .env.example to .env and fill in your credentials
cp .env.example .env
# Edit .env with your Digital.ai credentials
```

## Step 3: Install dependencies

```bash
npm install
```

This will install:
- WebdriverIO 8.36.0
- Appium 2.0.0
- Appium service for WebdriverIO
- Mocha test framework
- Chai assertions

## Step 4: Set up Appium (if running locally)

```bash
# Install Appium globally (optional)
npm install -g appium

# Install Android driver
npm run install:drivers
```

## Step 5: Run tests

**Against Digital.ai device farm:**
```bash
npm test
```

**Against local Appium server:**
```bash
# Terminal 1: Start Appium
npm run appium

# Terminal 2: Run tests
npm run test:local
```

## What You Get

✅ Fully configured mobile test automation setup  
✅ Two test scenarios (valid login + invalid password)  
✅ Real, verified element selectors  
✅ Ready to expand with more tests  
✅ CI/CD friendly structure  

## Next Steps

1. Add more test cases to `dai-bank-login-test.js`
2. Create additional test files as needed
3. Set up CI/CD pipeline (GitHub Actions, Jenkins, etc.)
4. Configure test reporting and screenshots

## Environment Variables

Your `.env` file needs:
```
DIGITAL_AI_BASE_URL=https://uscloud.experitest.com
DIGITAL_AI_ACCESS_KEY=aut_1_your_key_here
```

Get your access key from Digital.ai Testing portal → Your Account → Access Key
