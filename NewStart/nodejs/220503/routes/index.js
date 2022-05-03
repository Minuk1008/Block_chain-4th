const express = require('express');
const router = express.Router();
const boardRouter = require('./board')

router.use('/board', boardRouter)

router.get('/', (req,res) => {
    res.render('index')
})

module.exports = router