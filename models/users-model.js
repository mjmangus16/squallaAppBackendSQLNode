const db = require("../data/data-config");

module.exports = {
  getAll,
  findById,
  findByUsername,
  add,
  remove
};

function getAll() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first()
    .then(user => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
}

function findByUsername(username) {
  return db("users")
    .where({ username: username })
    .first()
    .then(user => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(id => {
      return findById(...id);
    });
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}
