const express = require("express");
const app = express();

const host = '127.0.0.1';
const port = 3000;

const routing = require('./router.js')

app.use('/router', routing);

app.listen(port, host, () => {
    console.log(`http://${host}:${port}/`);
});