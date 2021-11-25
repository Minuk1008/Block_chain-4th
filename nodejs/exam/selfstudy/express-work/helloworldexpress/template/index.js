const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', './abcviews');

const host = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.render("firstview"); //render = 올려준다
});
app.get('/dynamic_view', (req, res) => {
    res.render("dynamic", {
        name:"KDigital 4 class",
        url:"http://www.daum.net/"
    }); //render = 올려준다
});
app.get('/dynamic_view2', (req, res) => {
    res.render("dynamic2", {
        name:"KDigital 4 class",
        url:"http://www.daum.net/"
    }); 
});
app.get('/hi', (req, res) => {
    res.render("hifriend", {
        user : {name:"Michael", age:"20"}
    }); 
});
app.get('/hi', (req, res) => {
    res.render("hifriend", {
        user : {name:"Michael", age:"20"}
    }); 
});
app.get('/components', (req, res) => {
    res.render("content"); 
});

app.listen(port, host, () => {
    console.log(`Index application running at http://${host}:${port}/`);
});