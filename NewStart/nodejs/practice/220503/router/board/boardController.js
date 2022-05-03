const express = require('express');
const router = express.Router();

const list = router.get('/list', (req,res) => {
    res.render('board/list')
})
const view = router.get('/view', (req,res) => {
    res.render('board/view')
})
const write = router.get('/write', (req,res) => {
    res.render('board/write')
})
const update = router.get('/update', (req,res) => {
    res.render('board/update')
})

module.exports = {list, view, write, update}