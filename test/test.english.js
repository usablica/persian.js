//Prepare test
require('./../persian');
var assert = require('assert');

describe('convert', function () {	
    it('should change English numbers to Persian', function (done) {
        assert.equal("۳۴۵", persianJs("345").englishNumberToPersian());
        done();
    });
});