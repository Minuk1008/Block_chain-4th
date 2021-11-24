const http = require('http');
const url = require('url');
const port = 3000;
const ip = '127.0.0.1';

var server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type' : 'text/html; charset-utf8'});
    var strQuery = url.parse(req.url, true).query;
    var text = strQuery.year + " " + strQuery.month;
    res.end(text);
});

server.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`);
});