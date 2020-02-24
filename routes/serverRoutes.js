const express = require("express");
const router = express.Router();
const db = require("../api/db-api");

router.get("/test", (req, res) => {
  res.send("GET /test");
});

router.get("/feedData", (req, res) => {
  db.getAllFeedings()
    .then(dbRes => {
      res.send(dbRes.rows);
    })
    .catch(err => {
      console.log("GET /feedData:", err);
      res.send(err);
    });
});

router.put("/feedData", (req, res) => {
  const [date, time] = req.body;
  const [
    foodType,
    location,
    number_of_ducks,
    food_amount,
    food_units
  ] = req.body;
  console.log("PUT /feedData", req.body);
  res.send({ data: "success" });
});

module.exports = router;
