const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    get headerName() {
        return $('#content > div > h2');
    }

    async getHeaderText() {
        return this.headerName.getText();
    }
}

module.exports = new SecurePage();
