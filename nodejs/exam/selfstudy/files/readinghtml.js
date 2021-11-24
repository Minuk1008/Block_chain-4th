const http = require('http');
const fs = require('fs');
// var port = 3002;
// var homePage = '127.0.0.1';

var server = http.createServer(function(req, res) {
    fs.readFile('helloworld.html', (err, data) => {
        if(err) return console.error(err);
        res.writeHead(200, {'content-type' : 'text/html; charset-utf8'});
        res.write(data);
        return res.end();
    });
});

// server.listen(port, homePage, () => {
//     console.log(`http://${homePage}:${port}/`);
// });

server.listen(3002, '127.0.0.1', () => {
    console.log(`http://${'127.0.0.1'}:${3002}/`);
});