const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.use("/data", require("./routes/serverRoutes"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
