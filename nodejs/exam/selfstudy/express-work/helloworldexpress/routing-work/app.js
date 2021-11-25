const express = require("express");
const app = express();

const host = '127.0.0.1';
const port = 3000;

app.get('/:id', (req, res) => {
    res.send("The id is : " + req.params.id); //req.params.id 가 위에 /:id 랑 연결되어있음
});

app.get('/hello/:name/:id', (req, res) => {
    res.send("id : " + req.params.id + ' name : ' + req.params.name);
});

app.get('/helloworld/:id([0-9]{5})/:name([a-z]{5})', (req, res) => {
    res.send("id : " + req.params.id + " name : " + req.params.name);
}); //0~9까지만 받고 5자리만 받을께

app.listen(port, host, () => {
    console.log(`http://${host}:${port}/`);
});