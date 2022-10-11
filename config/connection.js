const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sql123',
  database: 'hr_db',
  port: 3306
},
  console.log('Connected to the hr_db.')
);

module.exports = connection;
