const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello dsf world!");
});

const port = process.env.PORT || 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
