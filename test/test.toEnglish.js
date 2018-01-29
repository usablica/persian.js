//Prepare test
require('./../persian');
var assert = require('assert');
describe('convert', function () {
	it('should Convert Persian and Arabic numbers to English', function (done) {
		assert.equal("12345678901234567890", persianJs("۱۲۳۴۵۶۷۸۹۰١٢٣٤٥٦٧٨٩٠").toEnglishNumber().toString());
        done();
    });
});
