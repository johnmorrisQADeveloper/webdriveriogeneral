"use strict";

class Page {
    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.url('http://the-internet.herokuapp.com/' + path)
    }
}

module.exports = new Page();