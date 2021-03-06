function getAndPrintHTML (requestDetails) {
  var https = require('https');

  var responseString = ''; // We will add chunks to this variable as they come

  https.get(requestDetails, function(response){
    // Handle the response from the website:

    response.setEncoding('utf8');

    // Handle data chunks as they come:
    response.on('data', function(dataChunk){
      responseString += dataChunk;
    });

    // Handle the end of the response:
    response.on('end', function(){
      console.log('Full response below: \n', responseString);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

