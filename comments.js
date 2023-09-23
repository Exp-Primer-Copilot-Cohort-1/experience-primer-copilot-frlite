// Create web server
// Run: node comments.js
// Open browser: http://localhost:8080/
// Output: Hello World

var http = require('http');

// Create a web server
var server = http.createServer(function(req, res) {
    // Write HTTP header
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Write response body
    res.end('Hello World\n');
});

// Start listening to server
server.listen(8080);

// Print URL for accessing server
console.log('Server running at http://localhost:8080/');