// requiring the node http module
var http = require('http');
var fs = require('fs');

// creating a read stream and specifying which file to read
var myReadStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');

// creating a writable
var myWriteStream = fs.createWriteStream(__dirname + '/lorem-II.txt');

// filling the buffer
myReadStream.on('data', function (chunk) {
    console.log('new chunk received...');
    // every time a data is received, write to the file (lorem-II.txt)
    myWriteStream.write(chunk);
});

// // storing the server method in variable
// var server = http.createServer(function (req, res) {
//     // when a request is made by the client, this function is executed
//     // writing response headers
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//
//     // log the request url to the console
//     console.log('request url: ' + req.url);
//
//     // end the response and send it to the browser
//     res.end('Sending just this plain text...');
// });
//
// // specifying a port to listen to
// server.listen(3000, '127.0.0.1');
//
// console.log('Listening on port 3000...');