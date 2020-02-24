const express = require("express");
const router = express.Router();
const db = require("../api/db-api");

const entryValidator = (a, b, c, d, e, f, g) => {
  return a && b && c && d && e && f && g;
};

router.get("/test", (req, res) => {
  res.send("GET /test");
});

router.get("/", (req, res) => {
  db.getAllFeedings()
    .then(dbRes => {
      res.send(dbRes.rows);
    })
    .catch(err => {
      console.log("GET /:", err);
      res.send(err);
    });
});

router.put("/", (req, res) => {
  const {
    date = "",
    time = "",
    food = "",
    location = "",
    numberOfDucks = "",
    feedAmount = "",
    feedUnits = ""
  } = req.body;

  if (
    !entryValidator(
      date,
      time,
      food,
      location,
      numberOfDucks,
      feedAmount,
      feedUnits
    )
  ) {
    res.send({ error: "Invalid Entry" });
    return "";
  }
  let tempDate = new Date(date);
  let [hours, minutes] = time.split(":");
  tempDate.setHours(Number(hours));
  tempDate.setMinutes(Number(minutes));

  db.insertFeeding([
    tempDate.getTime(),
    food,
    location,
    numberOfDucks,
    feedAmount,
    feedUnits
  ])
    .then(result => {
      res.send({ data: result });
    })
    .catch(err => {
      console.log("PUT insertFeeding:", err);
      res.send({ error: err });
    });
});

module.exports = router;
