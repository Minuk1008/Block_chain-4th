const mysql = require('mysql');
require('dotenv').config();
// const dbConfig = require('./dbconfig.json');    //방법1

var con = mysql.createConnection({                 //방법2
    host : process.env.HOST,                       //방법2
    user : process.env.USER,                       //방법2
    password : process.env.PASSWORD,               //방법2
    database : process.env.DATABASE                //방법2
});

// var con = mysql.createConnection(dbConfig);    //방법1

con.connect(function(err){
    if(err) throw err;
    console.log("Database Connect!");
    // var sQuery = "CREATE DATABASE NODEPOTFOLIO";
    // var sQuery = "CREATE TABLE customers (name varchar(128), addr varchar(256))";
    // var sQuery = "INSERT INTO customers (name, addr) VALUES ('James Hetfield', 'New York City')";
    // var sQuery = "INSERT INTO customers (name, addr) VALUES ('Kirk Hammit ', 'New York City')";
    // var sQuery = "INSERT INTO customers (name, addr) VALUES ('Adams Dole', 'LosAngless')";
    // var sQuery = "DELETE FROM customers WHERE name = "Adams Dole";
    // var sQuery = "SELECT * FROM customers ORDER BY addr";
    // var sQuery = "UPDATE customers SET addr='Missisifi Liver' where name = 'Kirk Hammit'";
    // var sQuery = "Select * from customers";
    var sQuery = "DROP table customers";
    //database를 지울때는 delete, drop은 table을 아예 싹 버려버리는 개념


    con.query(sQuery, (err, result, fields)=>{
        if(err) throw err;

        console.log(fields);
    });
});

//con.end();