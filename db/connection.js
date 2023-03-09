const mysql = require("mysql2");

// Create MySQL database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "employee_db",
});

// Establish connection to the MySQL database
connection.connect(function (error) {
  if (error) throw error;
});

module.exports = connection;
