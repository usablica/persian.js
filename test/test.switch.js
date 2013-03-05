//Prepare test
require('./../persian');
var assert = require('assert');
describe('convert', function () {
	it('should Convert Persian Chars to English Chars', function (done) {
		assert.equal("qwertyuiop[]asdfghjkl;'zxcvbnm,?", persianJs("ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو؟").switchKey().toString());
        done();
    });
});
