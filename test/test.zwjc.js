//Prepare test
require('./../persian');
var assert = require('assert');
describe('convert', function () {
    it('should convert to Zero-width non-joiner correction', function(done) {
        assert.equal("می​‌‍﻿خواهم ", persianJs("می خواهم").Zwjc());
        done();
    });
});
