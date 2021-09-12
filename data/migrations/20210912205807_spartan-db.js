exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("username").notNullable().unique();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
    .createTable("exercises", function(table) {
      table.increments("id").primary();
      table.string("exercise").notNullable();
      table.integer("reps").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users")
    .dropTableIfExists("exercises");
};
