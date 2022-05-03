const express = require("express");
const app = express();
const router = require('./routes');
const port = 3000;
const nunjucks = require('nunjucks');
// const routers = express.Router();

app.set('view engine', 'html');
nunjucks.configure('views', {
    express : app
})

app.use(express.urlencoded({extended:true})) //req message를 해석해줌

app.use(router);

// 파일 분배용
// app.use('/a', routers.get('/b', (req,res) => {
//     res.send("Hello World")
// }))
// localhost:3000/a/b 해야 나옴

app.listen(port, (req,res) => {
    console.log(`server start at ${port}`)
})