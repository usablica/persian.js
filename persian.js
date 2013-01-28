/*
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
    function _toPersianNumber(value, options) {
        if (!value) {
            return;
        }
		options = options || {};
		options.arabic =  options.arabic === undefined? true: options.arabic;
		options.english =  options.english === undefined? true: options.english;
		
        var arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
			englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
            persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
		
        for (var i = 0, numbersLen = arabicNumbers.length; i < numbersLen; i++) {
			var regExpPattern = new Array();
			if (options.arabic) regExpPattern.push(arabicNumbers[i]);
			if (options.english) regExpPattern.push(englishNumbers[i]);
			if (regExpPattern.length == 0) continue;
            value = value.replace(new RegExp(regExpPattern.join("|"), "g"), persianNumbers[i]);
        }
        return value;
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
        toPersianNumber: function(options) {
            return _toPersianNumber(this._str, options);
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