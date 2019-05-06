var https = require('https');

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    https.get(requestOptions, response => {
        
        let responseData = "";
        response.on('data', chunk => {
            responseData += chunk;
        });

        response.on('end', () => {
            console.log(responseData);
        });

    });
  
  }

  getAndPrintHTML();

  module.exports = {getAndPrintHTML};