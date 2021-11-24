var fs = require('fs');

console.log('Get file information');
fs.stat('input.txt', function(error, stat) {
    if(error) return console.error(error);

    console.log(stat);
    console.log('get file information success !!!');

    console.log('is File ? ' + stat.isFile())
    console.log('is Directory ? ' + stat.isDirectory())
    });
