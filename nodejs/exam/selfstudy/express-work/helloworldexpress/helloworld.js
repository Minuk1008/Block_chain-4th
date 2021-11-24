const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.end("Hello World");
});
app.get('/hellodir', (req, res) => {
    res.end("Hello dir");
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
});