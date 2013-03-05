//Prepare test
require('./../persian');
var assert = require('assert');

describe('convert', function () {
    it('should decode unreadable characters to correct Persian characters', function(done) {
        assert.equal("https://fa.wikipedia.org/wiki/صفحهٔ_اصلی", persianJs("https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C").fixURL().toString());
        done();
    });
});
