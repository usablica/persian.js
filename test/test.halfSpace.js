//Prepare test
require('./../persian');
var assert = require('assert');
describe('convert', function () {
    it('should convert to Zero-width non-joiner correction', function(done) {
        assert.equal("آمده‌ای ولی من رفته‌ام و می‌آییم", persianJs("آمده ای ولی من رفته ام و می آییم").halfSpace().toString());
        done();
    });
});
