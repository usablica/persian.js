(function( $ ){
 
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

        for (var i = 0, charsLen = persianChar.length; i < charsLen; i++) {
            value = value.replace(new RegExp(persianChar[i], "g"), englishChar[i]);
        }
        return value;
    }

     /**
     * Used for convert Arabic numbers to Persian
     *
     * @method _toPersianNumber
     * @param {String} value 
     * @return {String} Returns Converted numbers
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
     * Used for convert English numbers to Persian
     * @method _englishNumber
     * @param {String} value 
     * @return {String} Returns Converted numbers
    */
    function _englishNumber(value) {
        if (!value) {
            return;
        }
        var englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
            persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];

        for (var i = 0, numbersLen = englishNumbers.length; i < numbersLen; i++) {
            value = value.replace(new RegExp(englishNumbers[i], "g"), persianNumbers[i]);
        }
        return value;
    }



var methods = {
  englishNumber:function() {
      return this.each(function(){
        $value = $(this).val();
        $(this).val(_englishNumber($value));
      });
        
      },
      toPersianChar:function(){
        return this.each(function(){
          $value = $(this).val();
        $(this).val(_toPersianChar($value));
        });
      },
      toPersianNumber:function(){
         return this.each(function(){
          $value = $(this).val();
        $(this).val(_toPersianNumber($value));
        });
       },
       switchKey:function(){
         return this.each(function(){
          $value = $(this).val();
        $(this).val(_switchKey($value));
        });
       }

};
  $.fn.persianjs = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  
  };

})( jQuery );