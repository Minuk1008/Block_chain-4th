const express = require('express'); // require 과 exports 는 nodejs 내장모듈
const app = express(); // app = 객체
const router = require('./routes') //import router

app.use(router); // 라우터를 사용한다고 정의를 해야함

app.listen(3000, () => { //찐따가 들어야 하는 port
    console.log("서버시작 : 3000")
})