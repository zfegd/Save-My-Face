/**
 * Created by Andreas on 01-04-2017.
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log(req);
res.setHeader('Content-Type', 'text/plain');
res.setHeader('Access-Control-Allow-Origin','*');
res.end('errorMessageFromServer');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});