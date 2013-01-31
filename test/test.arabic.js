//Prepare test
require('./../persian');
var assert = require('assert');

describe('convert', function () {
    it('should change Arabic characters to Persian', function (done) {
        assert.equal("یکدبزذشسی", persianJs("يك‍دِبِزِذِشِسِ‌ى").toPersianChar());
        done();
    });
    it('should change Arabic numbers to Persian', function (done) {
        assert.equal("۱۲۳۴۵۶۷۸۹۰", persianJs("١٢٣٤٥٦٧٨٩٠").toPersianNumber());
        done();
    });
    it('should change English numbers to Persian', function (done) {
        assert.equal("۱۲۳۴۵۶۷۸۹۰", persianJs("1234567890").toPersianNumber());
        done();
    });
    it('should change English or Arabic numbers to Persian', function (done) {
        assert.equal("۱۲۳۴۵۶۷۸۹۰", persianJs("123456٧٨٩٠").toPersianNumber());
        done();
    });
});