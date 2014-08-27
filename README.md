<p align="center"><img src="http://usabli.ca/persianjs/usablica-persianjs-logo300.png"></p>  

A simple JavaScript library for Persian language localization.  
[![Build Status](https://travis-ci.org/usablica/persian.js.png?branch=master)](https://travis-ci.org/usablica/persian.js)

##How to use
Simply include `persian.js` in your HTML page and use the functions.   
If your in production environment, use `persian.min.js` instead.

###In Node.js
    npm install persianjs
###In Bower
    bower install persianjs
##Functions

###1) Convert to Persian characters
----------
Used for converting Arabic characters to Persian.

Example:

```javascript
persianJs("علي").arabicChar().toString(); //returns: علی
````

###2) Convert to Persian numbers from Arabic Number
----------
Used for converting Arabic numbers to Persian.

Example:

```javascript
persianJs("٣٤٥").arabicNumber().toString(); //returns: ۳۴۵
````
###3) Convert to Persian numbers from English Number
----------
Used for converting English numbers to Persian.

Example:

```javascript
persianJs("345").englishNumber().toString(); //returns: ۳۴۵
````
###4) Fix Persian Characters in URLs
----------
Used to convert unreadable Persian characters in URL to readable characters.

Example:

```javascript
persianJs("https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C").fixURL().toString(); //returns https://fa.wikipedia.org/wiki/صفحهٔ_اصلی
````
###5) Change keyboard layout
----------
Used for converting Persian char to English char.

Example:

```javascript

persianJs("لخخلمث").switchKey().toString(); //returns: google
````

###Chainable using
----------
You can use all of the functions together with one PersianJs instance (in v0.3):

Example:

```javascript

persianJs("علي٤2465").arabicChar().englishNumber().arabicNumber().toString(); //returns: علی۴۲۴۶۵
````


##Roadmap
- Zero-width non-joiner correction (e.g. convert می خواهم to می‌خواهم)
- Make library configurable (e.g. setting the language)
- Add `uglifyjs` to MakeFile in order to make `.min` version of script (Related to issue #7)

##Main Contributors
- [Afshin Mehrabani](http://afshinm.name/)  
- [Sallar Kaboli](http://sallar.me/)  
- [Armin Ebrahimi](http://netso.io/)  
- [Nima Shayafar](http://blog.phpmystery.com/)  
- [Soheil Rashidi](http://soheilrashidi.com/)  
- [Bersam Karbasion](http://bersam.org)  
- [Ali Sadattalab](https://github.com/salisa)

other conributors: https://github.com/usablica/persian.js/contributors

###Special Thanks
To [Ali Ehsanfar](http://ehsanfar.com/) for Logo design.

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
