Persian.js
=========

A simple JavaScript library for Persian language localization.  
[![Build Status](https://travis-ci.org/usablica/persian.js.png?branch=master)](https://travis-ci.org/usablica/persian.js)

##How to use
Simply include `persian.js` in your HTML page and use the functions.   
If your in production environment, use `persian.min.js` instead.

###In Node.js
    npm install persianjs

##Functions

###1) Convert to Persian characters
----------
Used for converting Arabic characters to Persian.

Example:

```javascript
persianJs("علي").toPersianChar(); //returns: علی
````

###2) Convert to Persian numbers
----------
Used for converting Arabic or English numbers to Persian.

Example:

```javascript
persianJs("٣٤٥678").toPersianNumber(); //returns: ۳۴۵۶۷۸
persianJs("٣٤٥678").toPersianNumber({english: false}); //returns: ۳۴۵678
persianJs("٣٤٥678").toPersianNumber({arabic: false}); //returns: ۳٤۵۶۷۸
// the default options are {arabic: true, english: true}
````

###3) ?
----------
We're completing **persian.js**, if you need other functionalities, please create a issue on this repository and let us know that.  
We will implement that as soon as possible!

##Roadmap
- Zero-width non-joiner correction (e.g. convert می خواهم to می‌خواهم)
- Make library configurable (e.g. setting the language)
- Complete unit tests

##Contributors
- [Afshin Mehrabani](http://afshinm.name/)  
- [Sallar Kaboli](http://sallar.me/)  
- [Armin Ebrahimi](http://netso.io/)  
- [Nima Shayafar](http://blog.phpmystery.com/)  
- [Soheil Rashidi](http://soheilrashidi.com/)  
- [Bersam Karbasion](http://bersam.org)  
- [Ali Sadattalab](https://github.com/salisa)

##Contributing

This is a open-source project. Fork the project, complete the code and send pull request.

##Getting support

- Google Groups [forum](http://groups.google.com/group/persianJs)
- Report [bug/issues](https://github.com/usablica/persian.js/issues)

##License

    Copyright (C) 2012 Afshin Mehrabani (afshin.meh@gmail.com)
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
    documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
    the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
    and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions 
    of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
    CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
    IN THE SOFTWARE.
