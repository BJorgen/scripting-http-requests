var getHTML = require('../http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/1337.html'
};

function print1337(html) {
    console.log(" This is were the output will go ... later");
    console.log(html)
}

getHTML(requestOptions, print1337);