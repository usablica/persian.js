//Prepare test
require('./../persian');
var assert = require('assert');

describe('convert', function () {
    it('should convert numbers to Persian words', function (done) {
        assert.equal("نهصد و نود و نه میلیارد و نهصد و نود و نه میلیون و نهصد و نود و نه هزار و نهصد و نود و نه", persianJs("999999999999").digitsToWords().toString());
        assert.equal("یک هزار و سیصد و هفتاد و دو", persianJs("1372").digitsToWords().toString());
        assert.equal("نوزده", persianJs("19").digitsToWords().toString());
        done();
    });
});
