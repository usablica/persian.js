/*
 * PersianJs v0.1.0
 * https://github.com/usablica/persian.js
 * MIT licensed
 *
 * Copyright (C) 2012 usabli.ca and other contributors
 */

(function (global) {

    // Default config/variables
    var VERSION = "0.1.0",
        // Check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports);
        hasProperty = Object.prototype.hasOwnProperty;

    /**
     * PersianJs main class 
     * 
     * @class PersianJs
     */

    // PersianJs main function/constructor, used for prototype.
    function PersianJs(str) {
        // Force toString
        this._str = '' + str;
    }

    /**
     * Used for Substitute characters
     *
     * @method _substitute
     * @param {String} value
     * @param {Array} insertChar
     * @param {Array} replaceChar
     * @return {String} Returns Substituted string
     * @api private
     */
    function _substitute(value, insertChar, replaceChar) {
        for (var i = 0, charsLen = insertChar.length; i < charsLen; i++) {
            value = value.replace(new RegExp(insertChar[i], "g"), replaceChar[i]);
        }

        return value;
    }

    /**
     * Used for convert Arabic characters to Persian
     *
     * @method _toPersianChar
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

        return _substitute(value, arabicChars, persianChars);
    }

    /**
     * Used for Change keyboard layout
     *
     * @method _switchKey
     * @param {String} value 
     * @return {String} Returns Converted char
     */
    function _switchKey(value) {
        if (!value) {
            return;
        }

        var persianChar = [ "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "چ", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و","؟" ],
            englishChar = [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",","?" ];

        return _substitute(value, persianChar, englishChar);
    }

    /**
     * Used for convert Arabic/English numbers to Persian
     *
     * @method _toPersianNumber
     * @param {String} value
     * @param {Object} options
     * @return {String} Returns Converted numbers
     * @api private
     */
    function _toPersianNumber(value, options) {
        options = options || {};

        if (hasProperty.call(options, 'from')) {
            options.to = (options.from === 'ar') ? 144 : (options.from === 'en') ? 1728 : 0;
        }

        return (!!value) ? value.replace(/[\d\u0660-\u0669]+/g, function(digit) {
            var ret = '';
            for (var i = 0, len = digit.length; i < len; i++) {
                ret += String.fromCharCode(digit.charCodeAt(i) + options.to);
            }
    
            return ret;
        }) : '';
    }

    /**
     * Used for fix Persian Charachters in URL
     * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
     *
     * @param {String} value 
     * @return {String} Returns fixed URL
     * @api private
     */
    function _fixURL(value) {
        if (!value) {
            return;
        }
        // Replace every %20 with _ to protect them from decodeURI
        var old = "";
        while (old !== value) {
            old = value;
            value = value.replace(/(http\S+?)\%20/g, '$1\u200c\u200c\u200c_\u200c\u200c\u200c');
        }
        // Decode URIs
        // NOTE: This would convert all %20's to _'s which could break some links
        // but we will undo that later on
        value = value.replace(/(http\S+)/g, function (s, p) {
            return decodeURI(p);
        });
        // Revive all instances of %20 to make sure no links is broken
        value = value.replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g, '%20');
        return value;
    }

    var persianJs = function(inputStr) {
        if (inputStr === "" || inputStr === null) {
            return null;
        }

        return new PersianJs(inputStr);
    };

    /**
     * Current PersianJs version
     *
     * @property version
     * @type String
     */
    persianJs.version = VERSION;

    // Prototype
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

        set: function (value) {
            this._str = String(value);
            return this;
        },

        toPersianChar: function() {
            return _toPersianChar(this._str);
        },

        toPersianNumber: function() {
            return _toPersianNumber(this._str, {from: 'ar'});
        },

        englishNumber: function() {
            return _toPersianNumber(this._str, {from: 'en'});
        },

        fixURL: function() {
            return _fixURL(this._str);
        },

        switchKey: function() {
            return _switchKey(this._str);
        }
    };

    // Expose PersianJs
    // CommonJS module is defined
    if (hasModule) {
        module.exports = persianJs;
    }

    // global ender:false
    if (typeof ender === 'undefined') {
        // add `persianJs` as a global object via a string identifier,
        // for Closure Compiler "advanced" mode
        global['persianJs'] = persianJs;
    }

    // global define:false
    if (typeof define === 'function' && define.amd) {
        define('persianJs', [], function () {
            return persianJs;
        });
    }
}).call(this, global);
