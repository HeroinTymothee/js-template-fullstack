const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "users";

  insert(users) {
    return this.connection.query(
      `insert into ${UsersManager.table} (firstname) values (?)`,
      [users.firstname]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${UsersManager.table} set title = ? where id = ?`,
      [users.title, users.id]
    );
  }
}

module.exports = UsersManager;
