const express = require('express');
const app = express();
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser');

const router = require('./routes')

const port = 3000;

// app.use(router); 이거 하나 때문에 3시간 버림 ㅋ 이게 윗순위로 되어있으면 아래께 적용안되는 정말 간단하고
//진짜 그냥 멍청한 사람도 아는 상식인데 왜 이걸 못보고 왜 이거 때문에 내 3시간이 날아갔을까
//ㄹㅇ 욕이 밖으로 튀어나오네 그만할란다 에혀

app.set("view engine", 'html')
nunjucks.configure("views", {express:app})

app.use(express.json()); // json 형식으로 데이터가 날라오면 그걸 req.body로 바꿔줌
app.use(express.urlencoded({extended:true})); //string 형식으로 데이터가 날라오면 그걸 req.body로 바꿔줌

app.use(router);

app.listen(port, () => {
    console.log(`server start at : ${port}`)
})