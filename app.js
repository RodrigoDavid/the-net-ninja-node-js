// requiring the node http module
var http = require('http');
var fs = require('fs');

// storing the server method in variable
var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);

    // checking the request
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, 'text/html');

        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, 'text/html');

        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/ninjas') {
        var ninjas = [{name: 'James', age: 29}, {name: 'Marx', age: 14}];

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(200, 'text/html');
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

// specifying a port to listen to
server.listen(3000, '127.0.0.1');

console.log('Listening on port 3000...');