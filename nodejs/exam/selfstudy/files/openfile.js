var fs = require('fs');

// Asynchronous - Open file (비동기)
console.log('Open file !!');
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) return console.error(err);

    console.log('File Opened Success !!!');
});