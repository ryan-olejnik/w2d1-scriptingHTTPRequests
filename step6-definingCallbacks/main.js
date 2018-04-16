var print_lowercase = require('./callbacks/print_lowercase.js');
var print_uppercase = require('./callbacks/print_uppercase.js');
var print_reverse = require('./callbacks/print_reverse.js');
var printHTML = require('./callbacks/printHTML.js');
var getHTML = require('./getHTML.js');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(requestOptions, print_reverse);


