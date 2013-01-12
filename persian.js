/**
 * PersianJs v0.1.0
 * https://github.com/usablica/persian.js
 * MIT licensed
 *
 * Copyright (C) 2012 usabli.ca and other contributors
 */
(function () {
	
    //Default config/variables
    var VERSION = "0.1.0",
        //Check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports);

    //PersianJs main function/constructor, used for prototype.
    function PersianJs(str) {
        this._str = str;
    }

    /**
     * Used for convert Arabic characters to Persian
     *
     * @param {String} value 
     * @return {String} Returns Converted string
     * @api private
     */
    function _toPersianChar(value) {
        if (!value) {
            return;
        }
        var arabicChars = ["ي", "ك", "‍", "دِ", "بِ", "زِ", "ذِ", "ِشِ", "ِسِ", "‌", "ى"],
            persianChars = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "", "ی"];

        for (var i = 0, charsLen = arabicChars.length; i < charsLen; i++) {
            value = value.replace(new RegExp(arabicChars[i], "g"), persianChars[i]);
        }
        return value;
    }

    /**
     * Used for convert Arabic numbers to Persian
     *
     * @param {String} value 
     * @return {String} Returns Converted numbers
     * @api private
     */
    function _toPersianNumber(value) {
        if (!value) {
            return;
        }
        var arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
            persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];

        for (var i = 0, numbersLen = arabicNumbers.length; i < numbersLen; i++) {
            value = value.replace(new RegExp(arabicNumbers[i], "g"), persianNumbers[i]);
        }
        return value;
    }

		
	/**
	 * Default map of accented and special characters to ASCII characters
	 *
	 * @var array
	 */	
	var slug_transliterations = {
		'^\\s+|\\s+$': '',
		'[ ]{2,}': ' ',
		'ä|æ|ǽ': 'ae',
        'ö|œ': 'oe',
        'ü': 'ue',
        'Ä': 'Ae',
        'Ü': 'Ue',
        'Ö': 'Oe',
        'À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ': 'A',
        'à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª': 'a',
        'Ç|Ć|Ĉ|Ċ|Č': 'C',
        'ç|ć|ĉ|ċ|č': 'c',
        'Ð|Ď|Đ': 'D',
        'ð|ď|đ': 'd',
        'È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě': 'E',
        'è|é|ê|ë|ē|ĕ|ė|ę|ě': 'e',
        'Ĝ|Ğ|Ġ|Ģ': 'G',
        'ĝ|ğ|ġ|ģ': 'g',
        'Ĥ|Ħ': 'H',
        'ĥ|ħ': 'h',
        'Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ': 'I',
        'ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı': 'i',
        'Ĵ': 'J',
        'ĵ': 'j',
        'Ķ': 'K',
        'ķ': 'k',
        'Ĺ|Ļ|Ľ|Ŀ|Ł': 'L',
        'ĺ|ļ|ľ|ŀ|ł': 'l',
        'Ñ|Ń|Ņ|Ň': 'N',
        'ñ|ń|ņ|ň|ŉ': 'n',
        'Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ': 'O',
        'ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º': 'o',
        'Ŕ|Ŗ|Ř': 'R',
        'ŕ|ŗ|ř': 'r',
        'Ś|Ŝ|Ş|Š': 'S',
        'ś|ŝ|ş|š|ſ': 's',
        'Ţ|Ť|Ŧ': 'T',
        'ţ|ť|ŧ': 't',
        'Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ': 'U',
        'ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ': 'u',
        'Ý|Ÿ|Ŷ': 'Y',
        'ý|ÿ|ŷ': 'y',
        'Ŵ': 'W',
        'ŵ': 'w',
        'Ź|Ż|Ž': 'Z',
        'ź|ż|ž': 'z',
        'Æ|Ǽ': 'AE',
        'ß': 'ss',
        'Ĳ': 'IJ',
        'ĳ': 'ij',
        'Œ': 'OE',
        'ƒ': 'f',
		'[^a-zA-Z0-9\u0600-\u06FF]+': '-',
		'[\u064b-\u065E]+' : '',  
		'^-|-$' : '',
		'\\s+' : '-',
		}

	/**
     * Returns a string with all spaces converted to underscores (by default), accented
     * characters converted to non-accented characters, and non word characters removed.
	*/		
	function _toSlug(slug) {
		
		for (var transliteration in slug_transliterations) {
			var re = new RegExp(transliteration, "g");
			slug = slug.replace(re, slug_transliterations[transliteration]);
		}

		return slug.toLowerCase();
	}		
		
		
    var persianJs = function(inputStr) {
        if (inputStr == "" || inputStr == null) {
            return null;
        }
        return new PersianJs(inputStr);
    }
    
    //Version
    persianJs.version = VERSION;

    //Prototype
    persianJs.fn = PersianJs.prototype = {
        clone: function () {
            return persianJs(this);
        },
        value: function () {
            return this._str;
        },
        toString: function () {
            return this._str.toString();
        },
        set : function (value) {
            this._str = String(value);
            return this;
        },
        toPersianChar: function() {
            return _toPersianChar(this._str);
        },
        toPersianNumber: function() {
            return _toPersianNumber(this._str);
       	},
        slug: function() {
            return _toSlug(this._str);
        }        		
    };

    //Expose PersianJs
    //CommonJS module is defined
    if (hasModule) {
        module.exports = persianJs;
    }
    //global ender:false
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `persianJs` as a global object via a string identifier,
        // for Closure Compiler "advanced" mode
        this['persianJs'] = persianJs;
    }
    //global define:false
    if (typeof define === 'function' && define.amd) {
        define('persianJs', [], function () {
            return persianJs;
        });
    }
})();