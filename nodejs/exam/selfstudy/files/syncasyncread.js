
// 비동기
var fs = require('fs');

fs.readFile('input.txt', function(err, data) {
    if(err) return console.error(err);

    console.log('Asyncronous read : ' + data.toString());
})

// 동기
var data = fs.readFileSync('input.txt');
console.log('Synchronous read : ' + data.toString());

console.log('Finished program !!');