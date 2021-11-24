const url = require('url');
const addr = 'http://localhost:3000/default.html?year=2021&month=Oct';

var qString = url.parse(addr, true);

console.log(qString.host); //localhost:3000
console.log(qString.pathname); // /default.html
console.log(qString.search); //?year=2021&month=Oct

var data = qString.query;
console.log(data.year); // 2021
console.log(data.month); // Oct
console.log(data); //위에 값