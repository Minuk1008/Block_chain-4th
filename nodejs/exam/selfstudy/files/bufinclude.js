var buf = Buffer.from('Hello, and welcome to Hell!!');
var x = 'abc';

console.log(buf.toString('ascii'));
console.log(buf.toJSON());
console.log("================");
console.log(buf.includes('welcome'));
console.log("================");
console.log(buf.indexOf('welcome'));
console.log("================");
console.log(buf.indexOf('l'));
console.log(buf.lastIndexOf('l'));
console.log("================");
console.log(Buffer.isBuffer(buf));
console.log(Buffer.isBuffer(x));
console.log("================");
console.log(Buffer.isEncoding('ascii'));
console.log("buf length = " + buf.length);