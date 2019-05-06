var https = require('https');

function getAndPrintHTMLChunks () {
    
    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    https.get(requestOptions, response => {
        
        // log chunck of data to the console as they are recieved
        response.on('data', chunk => {
            console.log(chunk + '\n')
        });

    });

}

getAndPrintHTMLChunks();

module.exports = {getAndPrintHTMLChunks};