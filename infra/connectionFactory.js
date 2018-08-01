const mysql = require('mysql')

function connectionFactory(){
    
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'casadocodego'
    })

    return conn
}

module.exports = connectionFactory