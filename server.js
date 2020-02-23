const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { Pool } = require("pg");
const dbUri = {
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URI}`
};
const pool = new Pool(dbUri);

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.get("/test", (req, res) => {
  res.send("SELECT * FROM TestColumns");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
