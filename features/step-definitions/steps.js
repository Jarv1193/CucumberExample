import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^Que yo estoy en la Pagina de (\w+)$/, async (page) => {
    await pages[page].open()
});

When(/^Yo me autentico con mi usuario (\w+) y contraseña (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^Yo deberia ver un mensaje diciendo (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

