const fs = require('fs');
var buf = Buffer.alloc(1024);

console.log('Open existing file !!!');

fs.open('input.txt', 'r+', function(err, fd) {
    if(err) return console.error(err);

    console.log('File Open Success!!!');

    console.log('Reading File !!!');

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if(err) return console.error(err);

        console.log('Reading File Success!!!');

        if(bytes > 0) console.log(buf.slice(0, bytes).toString());
    })
});