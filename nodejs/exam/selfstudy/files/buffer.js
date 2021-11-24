// var buf = Buffer.from('abc');

// var buf = Buffer.alloc(15, 'z');

var buf = Buffer.allocUnsafe(15);
buf.fill(10);
console.log(buf);