var https = require('https');

function getAndPrintHTML (options) {

    https.get(options, response => {
        
        let responseData = "";
        response.on('data', chunk => {
            responseData += chunk;
        });

        response.on('end', () => {
            console.log(responseData);
        });

    });
  
  }
  
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

module.exports = {getAndPrintHTML};