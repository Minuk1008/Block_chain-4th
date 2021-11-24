const http = require("http");
const fs = require("fs");
const url = require("url");

var port = 3000;
var strIp = '127.0.0.1';

var server = http.createServer((req, res) => {
    var pathName = url.parse(req.url).pathname;

    console.log("request for " + pathName + " received");
    fs.readFile(pathName.substr(1), (err, data) => {
        if(err) {
            console.error(err);
            res.writeHead(404, {'content-type' : 'text/html; charset-utf8'});
        } else {
            res.writeHead(200, {'content-type' : 'text/html; charset-utf8'});
            res.write(data.toString());
        }
        //send the response body
        res.end();
    });
})

server.listen(port, strIp, () => {
    console.log(`server running at http://${strIp}:${port}/`);
});