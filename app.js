// requiring the node http module
var http = require('http');
var fs = require('fs');

// storing the server method in variable
var server = http.createServer(function (req, res) {
    // when a request is made by the client, this function is executed
    // writing response headers
    res.writeHead(200, {'Content-Type': 'application/json'});

    // creating an object to send to the client
    var myAwesomeObject = {
        name: 'James',
        job: 'Ninja',
        age: 27
    };

    res.end(JSON.stringify(myAwesomeObject));
});

// specifying a port to listen to
server.listen(3000, '127.0.0.1');

console.log('Listening on port 3000...');