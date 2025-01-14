// Create web server
// Run server with node comments.js

var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var comments = [];

var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname === '/') {
        fs.readFile('./index.html', function(err, data) {
            if (err) {
                console.log(err);
                res.end('Server Error...');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        });
    } else if (pathname === '/submit') {
        var comment = urlObj.query;
        comments.push(comment);
        res.end(JSON.stringify(comments));
    } else {
        var filePath = path.join(__dirname, pathname);
        fs.readFile(filePath, function(err, data) {
            if (err) {
                console.log(err);
                res.end('Server Error...');
            } else {
                res.end(data);
            }
        });
    }
});

server.listen(3000, function() {
    console.log('listening on 3000...');
});
