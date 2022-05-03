const express = require("express");
const app = express();
const router = require('./routes');
const port = 3000;
const nunjucks = require('nunjucks');
// const routers = express.Router();

app.set('view engine', 'html');
nunjucks.configure('views', {
    express : app 
}) //이거 질문

app.use(express.urlencoded({extended:true})) //req message를 해석해줌

app.use(router);

// 파일 분배용
// app.use('/a', routers.get('/b', (req,res) => {
//     res.send("Hello World")
// }))
// localhost:3000/a/b 해야 나옴
// 이걸 응용해서 router.get( ~ 이부분을 컨트롤러에서 변함수로 지정 후 변수.함수 로 불러옴

app.listen(port, (req,res) => {
    console.log(`server start at ${port}`)
})