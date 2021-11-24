const fs = require('fs');

console.log('파일 지운다');
fs.unlink('delete.txt', (err)=> {
    if(err) return console.error(err);

    console.log('파일 지움')
})