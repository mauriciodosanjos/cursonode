const mysql = require('mysql')

function connectionFactory(){
    
    const conn = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })

    return conn
}

module.exports = connectionFactory