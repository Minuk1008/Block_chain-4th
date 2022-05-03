const router = require('./router')

const express = require('express');
const nunjucks = require('nunjucks')
const app = express();

const port = 3000;

app.set('view engine','html');
nunjucks.configure('views', {express : app} )

app.use(router);

app.listen(port, () => {
    console.log(`server start at : ${port}`)
})