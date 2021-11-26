const mysql = require("mysql");
require("dotenv").config();

var con = mysql.createConnection({ //con = connection
    host :  process.env.HOST,
    user :  process.env.USER,
    password :  process.env.PASSWORD,
    database :  process.env.DATABASE //없으면 생성을 해줘야함. 이거는 데이터베이스 연결
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Database Connected");
    // var sQuery = "CREATE DATABASE NODEPOTROLIO";
    var sQuery = "CREATE TABLE customers (name varcher(128), )";

    con.query(sQuery, (error, result) => {
        if(error) throw error;

        console.log("Database NODEPOTFOLIO Create Success")
    });
}); //이건 데이터베이스 연결하여 생성까지



// con.end();