const { response } = require("express");
const express = require("express");
const app = express();
const body = require("body-parser");
const bodyParser = require("body-parser");

const host = '127.0.0.1';
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({extended : false}); //url body-parser 사용 x = 내부 url incording을 쓴다

app.use(express.static(`${__dirname}/public`));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/html/" + "index.html");
});

app.get('/process_get', function(req, res){
    var response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/process_post',urlencodedParser, function(req, res){
    var response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(port, host, () => {
    console.log(`http://${host}:${port}/`);
});

//post