var getHTML = require('./getHTML.js');
var printHTML = require('./printHTML.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);



