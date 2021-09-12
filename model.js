const db = require("./data/db_config");

const findUsers = () => {
  return db("users");
};

const findExercises = () => {
  return db("exercises");
};

module.exports = {
  findUsers,
  findExercises,
};
