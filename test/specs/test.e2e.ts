import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open();
    
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(await SecurePage.flashAlert).toBeExisting();
    await expect(await SecurePage.flashAlert).toHaveText(
      'You logged into a secure area!');
  })
})

