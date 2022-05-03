const express = require('express');
const router = express.Router();
const routerBoard = require('./board')

router.use('/board', routerBoard)

router.get('/', (req, res) => {
    res.render('index') //render는 파일을 보내는거기 때문에 파일 경로가 아닌 이상 앞에 /를 붙이지 않는다.
})

module.exports = router;