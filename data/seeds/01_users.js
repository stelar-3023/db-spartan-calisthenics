
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "Steve", username: "slarsen", email:"slarsen-3@att.net", password:"password"},
      ]);
    });
};
