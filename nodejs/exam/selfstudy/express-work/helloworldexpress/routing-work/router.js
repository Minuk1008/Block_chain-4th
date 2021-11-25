const express = require("express");
// const app = express(); // 이걸 안한 이유는 바깥에 내보내기 위해
const router = express.Router();

router.get('/', (req, res) => {
    res.send("GET route on router");
});

router.post('/', (req, res) => {
    res.send("POST route on router");
});

module.exports = router; //바깥에 내보내기