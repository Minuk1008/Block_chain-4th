const fs = require("fs");
var buf = Buffer.alloc(20480);

var pos = 0;
var remainSize = 0;

//mp4 파일을 읽어야해
//읽기 위해 open을 해야하고
//그 전에 폴더들을 지정 해야함 - 완료
fs.readdir('./main/', (err, files) => {
    if(err) throw err;

    files.forEach((file) => {
        if(file === "ms.mp4") {
            fs.stat("./main/" + file, (err, stats) => {
                if(err) return err;

                var mainFile = "./main/" + file;
                //복붙 할꺼면 똑바로 하자 (main -> copy)
                var copyFile = "./copy/" + file;

                remainSize = stats.size;
                var readFile = fs.openSync(mainFile, 'r');
                var writeFile = fs.openSync(copyFile, 'a');

                console.log("오픈완료");

                var bytes = 0;
                var i = 0;
                //while문이 먼저 나오고 
                while(true) {
                    bytes = fs.readSync(readFile, buf, 0, buf.length, pos);
                    //남는 사이즈랑 메모리랑 비교해야하는데 이상한 파일이랑 비교함
                    if(remainSize > buf.length) {
                        fs.writeSync(writeFile, buf, 0, buf.length);
                        pos += bytes;
                        remainSize -= bytes;
                        //1씩 늘리기 안씀
                        i++;
                        console.log(`${i}*`);
                    } else {
                        fs.writeSync(writeFile, buf, 0, bytes);
                        fs.closeSync(readFile);
                        fs.closeSync(writeFile);
                        //닫기를 안해줌
                        break;

                        console.log("반복 완료")
                    }
                }
            })
        } return false
    })
})