const express = require('express')
const router = express.Router();
const boardController = require('./board.controller') //{list:list()}

router.get('/list', boardController.list)
router.get('/view', boardController.view)
router.get('/write', boardController.write)
router.get('/update', boardController.update)

router.post('/write', boardController.writeAction)

module.exports = router;