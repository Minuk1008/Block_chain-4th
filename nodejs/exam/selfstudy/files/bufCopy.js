var buf1 = Buffer.from('abcdefghijklmnopqrstu');
var buf2 = Buffer.from('HELLOWORLD');

// buf2.copy(buf1, 2);
// buf2.copy(buf1, 2, 0, 4);
buf1.write('hello world', 2);

console.log(buf1);
console.log(buf1.toString());

