//Prepare test
require('./../persian');
var assert = require('assert');
describe('convert', function () {
	it('should Convert Persian numbers to English', function (done) {
		assert.equal("1234567890", persianJs("۱۲۳۴۵۶۷۸۹۰").persianNumber().toString());
        done();
    });
});
