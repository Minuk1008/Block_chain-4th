const express = require("express");
const app = express();
// http 가 내장되어 있음 (create server 완료)

app.get('/', (req, res) => {
    console.log("get request for /(root page)");
    res.send('Hello get /');
});

app.post('/', (req, res) => {
    console.log("got a post request the root page");
});

app.delete('/del_user', (req, res) => {
    console.log("get delete user request for /del_user");
    res.send("Hello DELETE")
})

app.get('/list_user', (req, res) => {
    console.log("get request for /list_user");
    res.send("User Listing to page");
});

app.get('/ab*cd', (req, res) => {
    console.log("Get request for /ab*cd");
    res.send("Display pattern matching route")
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server app listening at http://%s:%s", host, port);
});