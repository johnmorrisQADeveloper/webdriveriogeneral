var BlinkDiff = require('blink-diff');
var expect = require('chai').expect;

describe('my screenshot', function () {

    it('TestCase1: should capture screen page', function () {

        browser.url('https://www.bbc.co.uk/iplayer');
        browser.click('li.ipNav__item:nth-child(2)');
        browser.click('#tvip-channels-stream-inner > ul > li.tvip-channel-cbeebies > a > img');
        browser.saveElementScreenshot('shots/bbclogo.png','a.button:nth-child(1)');
        browser.click('a.button:nth-child(1)');
        browser.setValue('#orb-search-q','peter rabbit');
        browser.click('*=Peter Rabbit');
        /*
        var testImage = browser.saveScreenshot('shots/test.png');
        var image = browser.saveElementScreenshot('shots/new/001TestStep001HeadFile.png','.header-title');

        // working but can't spot the difference
        // var diff = new BlinkDiff({
        //     imageAPath: 'shots/001TestStep001HeadFile.png',
        //     imageBPath: 'shots/new/001TestStep001HeadFile.png'
        // });
        //
        // diff.run(function (error, result) {
        //     if(error){
        //         throw error;
        //     } else {
        //         console.log(diff.hasPassed(result.code) ? 'Passed' : 'Failed');
        //         console.log('Found' + result.differences + ' differences.');
        //         expect(result.code).to.not.equal(1);
        //
        //     }
        // })

        const fs = require('fs');

        var resemble = require('resemblejs');
        var diff = resemble('shots/test.png').compareTo('shots/test1.png').scaleToSameSize().onComplete(function(data){
            console.log(data);
            fs.writeFileSync('./rr.png',data.getBuffer());
        });


*/

        /*
        browser.setValue('input[name=\'EMAIL\']','test@example.com');
        browser.saveScreenshot('shots/001TestStep002Signup.png');
        browser.saveElementScreenshot('shots/001TestStep003Filled.png','#mc_embed_signup_scroll');*/


    })


    // better
    // it('test work with buffers',  async () => {
    //     const compareImage = require('resemblejs/compareImages');
    //     const fs = require('fs');
    //     const data = await compareImage(
    //             fs.readFileSync('shots/test.png'),
    //             fs.readFileSync('shots/new/001TestStep001HeadFile.png')
    //         );
    //     console.log(data);
    //
    //     fs.writeFileSync('./output.png', data.getBuffer());
    // })



})