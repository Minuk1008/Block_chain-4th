const fs = require("fs");

console.log("Remove Directory");
fs.rmdir('./hellodir', (err)=> {
    if(err) throw err;

    console.log("Remove complete");
    fs.readdir('./hellodir', (err, files)=>{
        if(err) throw err;

        files.forEach((file)=> {
            console.log(file);
        });
    });
});