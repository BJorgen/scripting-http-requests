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

module.exports = getHTML;