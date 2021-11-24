const fs = require('fs');
var buf = Buffer.alloc(1024);

console.log('open input.txt file!!!')
fs.open('input.txt', 'r+', (err, fd) => {
    if(err) return console.error(err);

    console.log('input.txt open success!!!');
    console.log('truncate input.txt file after 20 bytes!!!');

    fs.ftruncate(fd,20,(err) => {
        if(err) return console.error(err);

        console.log('input.txt file truncated success!!!');
        console.log('reading input.txt file!!!')

        fs.read(fd, buf, 0, buf.length, 0, (err,bytes,buffer)=> {
            if(err) return console.error(err);

            if(bytes > 0) {
                return console.log(buf.slice(0, bytes).toString());
            }

            fs.close(fd, (err) => {
                if(err) return console.error(err);

                console.log('Everything is okay !!!')
            });
        });
    });
    //원래 여기서 close 를 해주는게 가장 좋음. open 안에서 사용하면 비동기처리로 됌.
});