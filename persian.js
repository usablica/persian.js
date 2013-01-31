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

    /**
     * PersianJs main class 
     * 
     * @class PersianJs
     */

    // PersianJs main function/constructor, used for prototype.
    var PersianJs = function(str) {
        // Force toString
        this._str = '' + str;
    }

    /**
     * Used for convert Arabic characters to Persian
     *
     * @method _toPersianChar
     * @param {String} value 
     * @return {String} Returns Converted string
     * @api private
     */
    var _toPersianChar = function(value) {
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
     * @method _arabicToPersianNumber
     * @param {String} value 
     * @return {String} Returns Converted numbers
     * @api private
     */
    var _arabicToPersianNumber = function(value) {
        return (!!value) ? value.replace(/[\u0660-\u0669]+/g, function(digit) {
            var ret = '';
            for (var i = 0, len = digit.length; i < len; i++) {
                ret += String.fromCharCode(digit.charCodeAt(i) + 144);
            }

            return ret;
        }) : '';
    }

    /**
     * Used for convert English numbers to Persian
     *
     * @method _englishToPersianNumber
     * @param {String} value 
     * @return {String} Returns Converted numbers
     * @api private
     */
    var _englishToPersianNumber = function(value) {
        return (!!value) ? value.replace(/\d+/g, function(digit) {
            var ret = '';
            for (var i = 0, len = digit.length; i < len; i++) {
                ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
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
    }

    /**
     * Current PersianJs version
     *
     * @property version
     * @type String
     */

    // Version
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

        arabicToPersianNumber: function() {
            return _arabicToPersianNumber(this._str);
        },

        englishToPersianNumber: function() {
            return _englishToPersianNumber(this._str);
        },

        fixURL: function() {
            return _fixURL(this._str);
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
})(this);
