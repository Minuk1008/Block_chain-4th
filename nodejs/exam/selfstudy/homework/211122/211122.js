const fs = require("fs");
const zlib = require("zlib");

var main = "./source/";
var copy = "./target/";
//뒤쪽 '/' 이거 필요한가? 19일꺼는 없는데...

//읽고 - 복사하고 - 압축
fs.readdir(main, (err, files) => {
    files.forEach((file) => {
        if(err) throw err;
        console.log("읽기 완료");
        // 폴더 읽어보자~~ 오케이 이런 파일들이 있었구만

        var sourceFile = main + file;
        var targetFile = copy + file;
        // 좀 간편하고 편하게 보자구

        fs.createReadStream(sourceFile) 
        .pipe(fs.createWriteStream(targetFile)); //source파일을 읽고 그걸 target파일에 써지도록 연동할꺼야
        console.log("복사 완료") // 성공

        fs.createReadStream(sourceFile)
        .pipe(zlib.createGzip()) //얘 이제 묶을꺼야 !
        .pipe(fs.createWriteStream(targetFile)); //묶을 압축파일 이름은 "target.gz"가 좋겠군
        console.log("압축 완료") // 에러
    });
});



// 압축만 해결하면 되는데.. (압축파일은 생기는데 내용이 없음 ;;) 
// copy를 압축하면 동기 처리라 다 파일 들어와야하는거 아닌가..

// 교수님 이거 만약 알축까지 되었을때 복사된 파일은 삭제되고 알축파일만 남아 있게 하려면 어떻게 해야하나요

// 잘하는 사람들꺼 참고 _ 복사본 만들어놓기 (복습)