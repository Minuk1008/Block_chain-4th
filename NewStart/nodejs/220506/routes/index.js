const express = require('express')
const router = express.Router()
const pool = require('../db.js')

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/board/list',async(req, res) => {
    try {        
        const [result] = await pool.query('SELECT * FROM board');
        // console.log(result)

        res.render('board/list', {
            items:result,
        })
    } catch(e) {
        console.log(`list error`)
    }
})
router.get('/board/view',async(req, res) => {
    try {
        const idx = req.query.idx
        const [result] = await pool.query(`SELECT * FROM board WHERE idx=${idx}`);
        console.log(result);

        res.render('board/view', {
            views:result,
        })
    } catch (e) {
        console.log(`view error`)
    }
})

router.get('/board/write', (req,res) => {
    res.render('board/write')
})

router.get('/board/update', async (req,res)=> {
    try {
        const idx = req.query.idx;
        const [result] = await pool.query(`SELECT * FROM board WHERE idx=${idx}`);

        res.render('board/update', {views:result})
    } catch(e) {
        console.log(`update error`);
        console.log(e)
    }
})





router.post('/board/write', async (req,res) => {
    // console.log(req.body);
    try{
        // console.log(req.body);
        const data = req.body;
        const result = await pool.query(`INSERT INTO board(subject, content, name) VALUES('${data.subject}','${data.content}','${data.name}')`);
        console.log(result)
        
        res.redirect(`view?idx=${result.insertId}`)
        console.log(`data insert complete`)
    } catch(e) {
        console.log(`write error`)
        console.log(req.body);
        console.log(e)
    }
})

router.post('/board/update', async (req,res) => {
    console.log(req.query)
    console.log(req.body)
    try{
        const data = req.body;
        const result = await pool.query(`INSERT INTO board(subject, content, name) VALUES('${data.subject}','${data.content}','${data.name}')`)
        console.log(result)

        res.redirect(`view?idx=${req.body.idx}`)
        console.log(`data update complete`)
    } catch(e) {
        console.log(`update error`)
        console.log(e)
    }
})

module.exports = router;