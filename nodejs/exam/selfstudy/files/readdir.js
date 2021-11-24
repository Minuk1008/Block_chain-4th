const fs = require('fs');

console.log('Reading directory');
//비동기라 계속 콜백함수를 사용하는 중
fs.readdir('./hellodir', (err, files) => {
    if(err) throw err;

    files.forEach((file)=>{
        console.log(file);
    });
});