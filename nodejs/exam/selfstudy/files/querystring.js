const http = require('http');
const port = 3000;
const ip = '127.0.0.1';

var server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type' : 'text/html; charset-utf8'});
    res.write(req.url);
    res.end();
});

server.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`);
});

////////////////////////////다시보기////////////////////////