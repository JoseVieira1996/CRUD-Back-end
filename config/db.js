/*const mysql = require('mysql')





var pool = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Mysql2020',
    database: 'celke'
})

module.exports = pool

*/


const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mysql2020',
    database: 'celke'
});

module.exports = pool;