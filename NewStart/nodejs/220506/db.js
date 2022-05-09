const mysql = require('mysql2/promise') //objct

const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'poiuqwer90',
    password:'poiuqwer!008',
    database:'homepage'
});

async function select() {
    try {
        const sql = `SELECT * FROM board`;
        const [result] = await pool.query(sql);
        // console.log(result)
    } catch (e) {
        console.log("err")
    }
}

select();

module.exports = pool