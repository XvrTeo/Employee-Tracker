const connection = require("./connection");
class db {
  constructor(connection) {
    this.connection = connection;
  }
}

module.exports = new db(connection);
