// login.page.js
"use strict";
var Page = require('./es6page')

class LoginPage extends Page {
    get username() {
        return browser.element('#username');
    }

    get password() {
        return browser.element('#password');
    }

    get form() {
        return browser.element('#login');
    }

    get flash() {
        return browser.element('#flash');
    }

    open() {
        super.open('login');
    }

    submit() {
        this.form.submitForm();
    }

}

module.exports = new LoginPage();