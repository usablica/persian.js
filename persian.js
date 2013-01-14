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
        hasModule = (typeof module !== 'undefined' && module.exports),
        // Farsi letters and equal not farsi letters
        letters = [
            {fa: "ی", nf: "ي"},
            {fa: "ک", nf: "ﻙ"},
            {fa:  "", nf: "‍"},
            {fa: "ﺩ", nf: "ﺩِ"},
            {fa: "ﺏ", nf: "ﺏِ"},
            {fa: "ﺯ", nf: "ﺯِ"},
            {fa: "ﺫ", nf: "ﺫِ"},
            {fa: "ﺵ", nf: "ﺵِ"},
            {fa: "ﺱ", nf: "ﺱِ"},
            {fa:  "", nf: "‌"},
            {fa: "۱", nf: "١"},
            {fa: "۲", nf: "٢"},
            {fa: "۳", nf: "٣"},
            {fa: "۴", nf: "٤"},
            {fa: "۵", nf: "٥"},
            {fa: "۶", nf: "٦"},
            {fa: "۷", nf: "٧"},
            {fa: "۸", nf: "٨"},
            {fa: "۹", nf: "٩"},
            {fa: "۰", nf: "٠"},
            {fa: "۱", nf: "1"},
            {fa: "۲", nf: "2"},
            {fa: "۳", nf: "3"},
            {fa: "۴", nf: "4"},
            {fa: "۵", nf: "5"},
            {fa: "۶", nf: "6"},
            {fa: "۷", nf: "7"},
            {fa: "۸", nf: "8"},
            {fa: "۹", nf: "9"},
            {fa: "۰", nf: "0"}
        ],
        lettersRegex = _getLettersRegex();

    /**
     * Assign toPersian method to String Prototype to
     *  ease of String object method call without any instantiation
     */
    String.prototype.toPersian = function() {
        return _toPersian(this.toString());
    };

    //PersianJs main function/constructor, used for prototype.
    function PersianJs(str) {
        this._str = str;
    }

    /**
     * Used for convert Arabic/English characters and numbers to Persian
     *
     * @param {String} value
     * @return {String} Returns Converted string
     * @api private
     */
    function _toPersian(value) {

        for (var i = 0; i < letters.length; i++) {
            value = value.replace(lettersRegex[i], letters[i].fa);
        }
        return value;
    }

    /**
     * Used for convert Arabic/English characters and numbers to Persian
     *
     * @return {Array} Returns array of letters regex object
     * @api private
     */
    function _getLettersRegex () {
        var lettersRegex = [];
        for (var i = 0; i < letters.length; i++) {
            lettersRegex.push(new RegExp(letters[i].nf, "g"));
        }
        return lettersRegex;
    }

    var persianJs = function(str) {
        return str ? new PersianJs(str) : str;
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
        toPersian: function() {
            return _toPersian(this._str);
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