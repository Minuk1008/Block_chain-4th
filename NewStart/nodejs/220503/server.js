const express = require("express");
const app = express();
const router = require('./routes')
const port = 3000;

app.use(router)

app.listen(port, (req,res) => {
    console.log(`server start at ${port}`)
})