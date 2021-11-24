var http = require('http');
const homePage = '127.0.0.1';
const port = 3001;

function ab(){
    let pros;
    let result = '';
    for(let i = 1; i < 10; i ++){
        for(let j = 1; j < 10; j ++){
            pros = i*j;
            result += i + ' * ' + j + ' = ' + pros + '\n';
        }
        result += '\n'
    }
    console.log(result);
}

function ac(){
    let pros = '';
    let result = '';
    for(let i = 1; i < 10; i ++){
        for(let j = 1; j < 10; j ++){
            pros = i*j;
            if(j > 1) {
                result += ' __ '
            }
            result += i + ' * ' + j + ' = ' + pros;
        }
        result += '\n'
    }
    console.log(result);
}

const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end();
})

server.listen(port, homePage, () => {
    ab();
    ac();
    // console.log(`Server running at http://${homePage}:${port}/`);
});







