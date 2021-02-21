//Prepare test
require('./../persian');
var assert = require('assert');
describe('convert', function () {
	it('should Convert English Chars to Persian Chars', function (done) {
		assert.equal("ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو؟", persianJs("qwertyuiop[]asdfghjkl;'zxcvbnm,?").switchKeyBackToPersian().toString());
        done();
    });
});
