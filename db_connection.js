const mysql = require('mysql2');

//Creating MySQL database connection
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'webtechnology'
});

mysqlConnection.connect((err)=>{
  if(err){
    console.log(err);
  }
});

module.exports = mysqlConnection
