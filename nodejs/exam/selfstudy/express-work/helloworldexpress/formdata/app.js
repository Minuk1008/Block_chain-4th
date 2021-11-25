const express = require("express");
const cookieParser = require("cookie-parser");

const host = '127.0.0.1';
const port = 3000;

const app = express();
app.use(cookieParser);

app.get('/', (req, res) => {
    res.cookie('name', 'express').send('cookie set');
});

app.get('/clear', (req, res) => {
    res.clearCookie('express');
    res.send("cookie express clear");
})

app.listen(port, host, () => {
    console.log(`http://${host}:${port}/`)
});