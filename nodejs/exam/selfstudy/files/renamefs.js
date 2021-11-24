const fs = require('fs');

fs.rename('input copy.txt', 'hello.txt', (err)=> {
    if(err) throw (err);

    console.log('File rename success');
})