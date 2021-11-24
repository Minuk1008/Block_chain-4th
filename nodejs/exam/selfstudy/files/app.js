// var http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end('hello world!!!');
//     console.log("Create Server listen to 8080")
// }).listen(8080);

var http = require('http');
var dt = require('../nodeapp/myfirstnodemedule');
const homePage = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type' : 'text/html; charset="UTF-8'});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset="UTF-8')
    // 두가지 방법이 있음
    res.write('The data and time are currently: ' + dt.myDateTime());
    res.end();
});

server.listen(port, homePage, () => {
    console.log(`Server running at http://${homePage}:${port}/`);
})