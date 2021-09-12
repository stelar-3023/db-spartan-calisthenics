// access environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();
const port = process.env.PORT || 8000;

server.use(cors());
server.use(express.json());

// Basic route
server.get("/", (req, res) => {
  res.send("<h2>Database for Spartan Calisthenics</h2>");
});

// Listener
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
