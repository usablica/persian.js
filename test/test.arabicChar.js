//Prepare test
require('./../persian');
var assert = require('assert');
describe('convert', function () {
	it('should change Arabic characters to Persian', function (done) {
        assert.equal("یکدبزذشسی", persianJs("يك‍دِبِزِذِشِسِ‌ى").arabicChar().toString());
        done();
    });
});
