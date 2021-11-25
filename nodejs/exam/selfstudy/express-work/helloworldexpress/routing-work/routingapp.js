const express = require("express");
const app = express(); //createServer랑 똑같음

const host = '127.0.0.1';
const port = 3000;

app.get('/hello', function(req, res) {
    res.send("Hello World!!");
});

app.post('/hello', function(req, res) { 
    res.send("You just called the post method at '/hello'");
});

app.listen(port, host, ()=> {
    console.log(`http://${host}:${port}/`);
});