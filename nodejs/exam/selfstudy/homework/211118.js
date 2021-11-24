const fs = require("fs");
var buf = Buffer.alloc(2048);

fs.open("ms.mp4", "r+", (err, fd) => {
    if(err) throw err;

    fs.stat("ms.mp4", (err, stats) =>{
        if(err) throw err;

        console.log(stats);
        fs.read(fd, buf, 0, buf.length, 0, (err, bytesRead, buffer) => {
            if(err) throw err;

            console.log(stats);
        });
    });
});