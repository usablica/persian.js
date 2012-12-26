/*
* Convert Arabic characters to Persian
*
* return {String} Clear Persian string
*/
String.prototype.toPersian = function () {
    var arabicChars = ["ي", "ك", "‍", "دِ", "بِ", "زِ", "ذِ", "ِشِ", "ِسِ", "‌"],
        persianChars = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", ""],
        value = this.toString();
    for (var i = 0, charsLen = arabicChars.length; i < charsLen; i++) {
        value = value.replace(new RegExp(arabicChars[i], "g"), persianChars[i]);
    }
    return value;
};