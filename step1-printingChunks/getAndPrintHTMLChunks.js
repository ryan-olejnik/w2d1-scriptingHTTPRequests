function getAndPrintHTMLChunks(){
  var https = require('https');
  
  var requestDetails = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestDetails, function(response){
    // this function will handle the response from the host:
    response.setEncoding('utf8');

    // Handle chunks of data as they come:
    response.on('data', function(data){
      console.log('Chunk recieved of length: ', data.length);
      console.log(data);
      console.log('----end of chunk---- \n\n');
    });

    // Handle errors if they arise:
    response.on('error', function(err){
      throw err;
      console.log('There was an error!');
    });

    // Handle when we reach the end of the response:
    response.on('end', function(){
      console.log('We have reached the end of the response!');
    });
  });
}

getAndPrintHTMLChunks();
