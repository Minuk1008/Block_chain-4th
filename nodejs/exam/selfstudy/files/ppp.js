const fs = require("fs");

console.log("아 뭐 하라고 했는데 뭔지 까먹었다..")

fs.readdir("./temp/hellodir", (err, files) => {
    if(err) throw err;

    console.log("오류확인1");
    files.forEach((file) => {
        fs.unlink("./temp/hellodir/" + file, (err) => {
            if(err) throw err;
        
            console.log("이거 지워지나 확인");

            fs.rmdir("./temp/hellodir", (err)=> {
                if(err) throw err;

                console.log("일단........hellodir 지우긴 함")
                    });
                });
    });
    // fs.readdir("./temp", (err, files) => {
    //     if(err) throw err;

    //     files.forEach((file) => {
    //         console.log(file + "txt 파일은 없지만...음......읽어보기...아무것도 안나와야 정상, 아님 에러?")
    //     });
    // });
});