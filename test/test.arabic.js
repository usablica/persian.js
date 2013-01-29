//Prepare test
require('./../persian');
var assert = require('assert');

describe('convert', function () {
    it('should change Arabic characters to Persian', function (done) {
        assert.equal("علی", persianJs("علي").toPersianChar());
        done();
    });
    it('should change Arabic numbers to Persian', function (done) {
        assert.equal("۳۴۵", persianJs("٣٤٥").toPersianNumber());
        done();
    });
    
	it('should change a string with all spaces converted to underscores (by default),accented characters \
		converted to non-accented characters, and non word characters removed', function (done) {
        assert.equal("این-یک-متن-فارسی-هست-46456-تست", persianJs("این یک متن فارسی هست 46456 تست !@#$%").slug());
        done();
    });
});