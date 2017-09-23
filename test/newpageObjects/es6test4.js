var expect = require('chai').expect;
var LoginPage = require('../oldPageObjects/login');
describe('ES6 login form', function () {
    it('ES6 should deny access with wrong creds', function () {
        LoginPage.open('login');
        LoginPage.username.setValue('foo');
        LoginPage.password.setValue('bar');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });
    it('ES6 should allow access with correct creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });
});