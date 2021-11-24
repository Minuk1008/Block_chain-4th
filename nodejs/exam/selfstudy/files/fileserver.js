const http = require('http');
const url = require('url');
const fs = require('fs');

var port = 3000;
var ip = '127.0.0.1';

var server = http.createServer((req,res)=>{
    var qString = url.parse(req.url, true);
    var fileName = "." + qString.pathname;

    fs.readFile(fileName, (err, data) => {
        if(err) {
            res.writeHead(404, {"content-Type" : 'text/html; charset-utf8'});
            return res.end("404 Not Found!");
        };

        res.writeHead(200, {"content-Type" : 'text/html; charset-utf8'});
        res.write(data);
        return res.end();
        });
    });

server.listen(port, ip, ()=>{
    console.log(`http://${ip}:${port}/`);
});