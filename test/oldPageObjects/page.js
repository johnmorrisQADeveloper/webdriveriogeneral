function Page () {
    this.title = 'My Page';
}
Page.prototype.open = function (path) {
    browser.url('http://the-internet.herokuapp.com/' + path)
}
module.exports = new Page()