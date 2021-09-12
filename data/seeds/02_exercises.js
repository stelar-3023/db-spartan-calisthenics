exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("exercises")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("exercises").insert([{ exercise: "squats", reps: 120 }]);
    });
};
