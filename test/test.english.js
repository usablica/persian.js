//Prepare test
require('./../persian');
var assert = require('assert');
describe('convert', function () {
	it('should Convert English numbers to Persian', function (done) {
		assert.equal("۱۲۳۴۵۶۷۸۹۰", persianJs("1234567890").englishNumber().toString());
        done();
    });
});
