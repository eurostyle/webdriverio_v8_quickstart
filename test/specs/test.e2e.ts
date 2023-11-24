import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('My Login application', () => {
  
  before(async () => {
    await LoginPage.open();
  });
  
  it('should login with valid credentials', async function () {
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(SecurePage.flashAlert).toBeDisplayed();
  });
  
  it('Should pass the test only on Chrome', async () => {
    const browserName = (browser.capabilities as WebdriverIO.Capabilities).browserName as string;
    if (browserName !== 'chrome') {
      throw new Error('This test only works with Chrome')
    }
    expect(browserName).toEqual('chrome');
  });
  
})

