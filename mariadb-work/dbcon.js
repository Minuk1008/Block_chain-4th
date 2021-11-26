const mysql = require("mysql");
const config = require("./dbconfig.json");

module.exports=mysql.createPool(config);