function getHTML(requestOptions, callback){
  var https = require('https');
  var response = '';

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    response.on('data', function(dataChunk){
      response += dataChunk;
    });

    response.on('end', function(){
      callback(response);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);


