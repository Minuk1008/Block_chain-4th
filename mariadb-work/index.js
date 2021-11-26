// const { config } = require("dotenv");
const express = require("express");
const mysql = require("mysql");
const path = require("path");

// const getDbConnection = require('./dbcon');
const app = express();

mysql.getDbConnection((err, connection) => {
    if(!err) {
        connection.query("Select ")
    };
});
