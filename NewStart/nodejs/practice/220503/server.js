const express = require('express');
const app = express();

const port = 3000;

app.use(router);

app.listen(port, () => {
    console.log(`server start at : ${port}`)
})