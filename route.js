const router = require("express").Router();
const Users = require("./model");
const Exercises = require("./model");

router.get("/", async (req, res) => {
  const users = await Users.findUsers();
  const exercises = await Exercises.findExercises();
  res.json({ users, exercises });
})

module.exports = router;