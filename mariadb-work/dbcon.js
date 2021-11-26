const mysql = require("mysql");
const config = require("./dbconfig.json");

// let dbPool = mysql.createPool(congif); //const 사용하면 안됌

// function getDbConnection(callback) {
//     dbPool.getConnection((err, conn) => {
//         if(!err) {
//             callback(conn);
//         }
//     })
// };

module.exports=mysql.createPool(config);