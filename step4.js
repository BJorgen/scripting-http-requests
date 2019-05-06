var https = require('https');

function getHTML (options, callback) {
    
    https.get(options, response => {
        
        let responseData = "";
        response.on('data', chunk => {
            responseData += chunk;
        });

        response.on('end', () => {
            callback(responseData);
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

module.exports = {getHTML};