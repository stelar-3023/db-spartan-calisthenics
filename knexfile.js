// access .env file
require("dotenv").config();
// import pg library
const pg = require("pg");

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}


module.exports = {
  development: {
    client: "pg",
    connection: {
      port: process.env.PORT,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: { directory: __dirname + "/data/migrations" },
    seeds: { directory: __dirname + "/data/seeds" },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
    migrations: { directory: __dirname + "/data/migrations" },
    seeds: { directory: __dirname + "/data/seeds" },
  },
};
