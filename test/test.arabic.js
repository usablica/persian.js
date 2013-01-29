//Prepare test
require('./../persian');
var assert = require('assert');

describe('convert', function () {
    it('should change Arabic characters to Persian', function (done) {
        assert.equal("علی", persianJs("علي").toPersian());
        done();
    });
    it('should change Arabic numbers to Persian', function (done) {
        assert.equal("۳۴۵", "٣٤٥".toPersian());
        done();
    });
});