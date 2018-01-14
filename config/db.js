var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '8889',
  user     : 'root',
  password : 'root',
  database : 'proper_db'
});
connection.connect();

module.exports = connection;