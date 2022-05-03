const express = require ('express')
const router = express.Router() // 반환값은?? 객체

//use 는 get post 상관없이 모든 요청을 다 할 수 있다.
//use에서 path 를 생략한다면 그 어떤 path에서도 작성할 수 있게 함
//위에서부터 아래 순서대로 내려가기 때문에 use랑 get 상관없이 위에 있는게 실행된다
//미들웨어를 두번 실행하고 싶으면 3번째 인자값으로 next를 사용한다
router.use((req, res, next) => {
    // res.send("use test")
    console.log("hello next")
    next() //이렇게 사용하면 똑같은 path로 한번 더 검색한다.
    //next 사용 목적은 req.user req.session 등을 다음 라우터까지 전달시키기 위해 사용
})

router.get('/', (req, res) => {
    res.send('test222')
})
// 미들웨어 == (req, res) => {res.send('hello World')} 콜백함수 (express 가 정함)
/*
    콜백함수를 사용하는 이유 = 내가 원하는 시점(함수)에서 함수를 호출하고 싶어서
*/

router.get('/user' , (req, res) => {
    res.send('router~!')
})

router.use(express.urlencoded({extended : true})) // req.body를 만들어주는 함수
// name = mw&34124=34124
// {name} : {mw}, {34124} : {34124}

module.exports = router // 서버에서 쓸 수 있게 보내줌 // nodejs 내장모듈


/* 
    res.send()
    res.json()
    res.render()
*/