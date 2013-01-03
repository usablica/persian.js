/*
* Convert Arabic characters to Persian
*
* return {String} Clear Persian string
*/
String.prototype.toPersian = function () {
    var arabicChars = ["ي", "ك", "‍", "دِ", "بِ", "زِ", "ذِ", "ِشِ", "ِسِ", "‌", "ى"],
        persianChars = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "", "ی"],
        arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
        persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"],
        value = this.toString();
    arabic = arabicChars.concat(arabicNumbers);
    persian = persianChars.concat(persianNumbers);
    for (var i = 0, charsLen = arabic.length; i < charsLen; i++) {
        value = value.replace(new RegExp(arabic[i], "g"), persian[i]);
    }
    return value;
};
