// requiring the node http module
var http = require('http');
var fs = require('fs');

// storing the server method in variable
var server = http.createServer(function (req, res) {
    // when a request is made by the client, this function is executed
    // writing response headers
    res.writeHead(200, {'Content-Type': 'text/html'});

    // log the request url to the console
    console.log('request url: ' + req.url);

    // creating a read stream and specifying which file to read
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

    // piping from a readable stream to a writable stream
    myReadStream.pipe(res);
});

// specifying a port to listen to
server.listen(3000, '127.0.0.1');

console.log('Listening on port 3000...');