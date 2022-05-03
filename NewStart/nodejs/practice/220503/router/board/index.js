const express = require("express");
const router = express.Router();

const boardController = require('./boardController.js')

/*
    get : 리스트, 글 내용, 글 작성시, 글 수정시
    post(나중) : 글 작성시, 글 수정시, 댓글(나중), 좋아요(나중), 글 삭제시
*/

router.get('/list', boardController.list) //a,b 적용
router.get('/view', boardController.view) 
router.get('/write', boardController.write) 
router.get('/update', boardController.update) 

module.exports = router;