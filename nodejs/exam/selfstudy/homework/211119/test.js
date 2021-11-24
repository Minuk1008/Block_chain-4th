const fs = require("fs");
var buf = Buffer.alloc(20480);
var pos = 0;
var fileSize = 0;
// var readBytes = 0;

console.log("시작");

fs.readdir("./main", (err, files) => {
    if(err) throw err;

    files.forEach((file) => {
        if(file === "ms.mp4") {
            fs.stat("./main/" + file, (err, stats) => {
                if(err) throw err;

                var mainFileName = './main/' + file;
                var copyFileName = './copy/' + file;
 
                fileSize = stats.size;
                console.log("fileName = " + mainFileName + "fileSize = " + fileSize);

                var readFile = fs.openSync(mainFileName, 'r');
                var writeFile = fs.openSync(copyFileName, 'a');

                var readBytes = 0;
                var i =0;
                while(true) {
                    readBytes = fs.readSync(readFile, buf, 0, buf.length, pos);
                    if(fileSize > buf.length) {
                        fs.writeSync(writeFile, buf, 0, buf.length);
                        pos += readBytes;
                        fileSize -= readBytes;
                        i++;
                        console.log(`${i}*`);
                    } else {
                        fs.writeSync(writeFile, buf, 0, readBytes);
                        fs.closeSync(readFile);
                        fs.closeSync(writeFile);
                        break;
                    }
                }
            });
        };
        return false;
    });
    });