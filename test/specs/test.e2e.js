const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const fs = require('fs');
const { cwd } = require('node:process');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))

        let text = await SecurePage.getHeaderText()
        var filePath = `${cwd()}` + '\\file.json'
        fs.writeFileSync(filePath, "{ \"username\": \"test@webdriver.io\", \"password\": \"Test1234!\"}", {flag: "w"})
        await browser.pause(3000)
    })
})

