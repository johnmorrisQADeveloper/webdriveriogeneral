var assert = require('assert');


describe('Synchronous -- new style ... webdriver.io page', function () {

    browser.addCommand("getUrlAndTitle", function (customVar) {
        return {
            url: this.getUrl(),
            title: this.getTitle(),
            customVar: customVar
        };
    });

    it('should have the right title', function () {
        browser.url('http://webdriver.io/');
        var title = browser.getTitle();
        console.log("Title "+title);
        assert.equal(title, "WebdriverIO - WebDriver bindings for Node.js");
    })

    it('should have the right title', function () {
        browser.click('a[href=\'/api.html\']');
        var t = browser.getText('body > section > div > section.inner.api > article > a');
        console.log("TTT" +t);

        // selectors with link text
        console.log(browser.getText('=addValue'));
        browser.click('=addValue');

        // partial link text , contains
        console.log(browser.getText('*=AndDrop'));
        browser.click('*=AndDrop');

        // CSS Query Selector
        console.log(browser.getText('a.improve'));
        browser.click('a.improve');

    })



})