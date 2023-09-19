const http = require('http');
const EventEmitter = require('events');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end("Welcome");
});

server.listen(5000);
    