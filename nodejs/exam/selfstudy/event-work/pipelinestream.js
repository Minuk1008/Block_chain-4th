const fs = require("fs");

var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream("output.txt");
// var readerStream = fs.createReadStream("ms.mp4");
// var writerStream = fs.createWriteStream("ms copy.mp4");

readerStream.pipe(writerStream);

console.log("write pipe stream finished !");