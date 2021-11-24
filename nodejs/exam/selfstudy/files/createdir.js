const fs = require('fs');

console.log('Create ./hellodir');
fs.mkdir('./hellodir', (err) => {
    if(err) throw err;

    console.log('create directory success');
});