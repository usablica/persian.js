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
        hasModule = (typeof module !== 'undefined' && module.exports),
        hasOwnProperty = Object.prototype.hasOwnProperty;

    // PersianJs main function/constructor, used for prototype.
    var PersianJs = function(str) {
        // Force toString
        this._str = '' + str;
    }

    /**
     * Used for convert Arabic characters to Persian
     *
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
     * Used for convert English or Arabic numbers to Persian
     *
     * @param {String} value 
     * @return {String} Returns Converted numbers
     * @api private
     */
    var _toPersianNumber = function(value) {
        return (!!value) ? value.replace(/(\d+)|([\u0660-\u0669]+)/g, function(digit, english, arabic) {
            var ret = '';
            for (var i = 0, len = digit.length; i < len; i++) {
                ret += String.fromCharCode(digit.charCodeAt(i) + ((!!english) ? 1728 : 144));
            }

            return ret;
        }) : '';
    }

    var persianJs = function(inputStr) {
        if (inputStr == "" || inputStr == null) {
            return null;
        }

        return new PersianJs(inputStr);
    }
    
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

        set : function (value) {
            this._str = String(value);
            return this;
        },

        toPersianChar: function() {
            return _toPersianChar(this._str);
        },

        /**
         * Used for convert English/Arabic numbers to Persian
         *
         * @param {Object} from: en | ar
         * @return {String} Returns Converted numbers
         * @api public
         */
        toPersianNumber: function(object) {
            if (!!object && hasOwnProperty.call(object, 'from')) {
                switch (object.from.toLowerCase()) {
                    case 'ar': return _arabicNumbertoPersian(this._str); break;
                    case 'en':
                    default: return _englishNumberToPersian(this._str);
                }
            }
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
