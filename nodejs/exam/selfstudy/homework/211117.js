const fs = require('fs');
var buf = Buffer.alloc(1024);
console.log('시작');

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
    return result;
};

fs.open('211117.txt', 'r+', (err, fd) => {
    if(err) return console.error(err);

    console.log('오픈 완료');

    fs.write(fd, ab(), function(err) {
        if(err) return console.error(err);

        console.log('파일 쓰기');

        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if(err) return console.error(err);

            // fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {

            fs.close(fd, function(err) {
                if(err) return console.error(err);

                console.log('success');
            })
        })
    });
});