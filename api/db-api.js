const { Pool } = require("pg");
const dbUri = {
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URI}`
};
const pool = new Pool(dbUri);
////////////////
// DB Queries //
////////////////
const getAllFeedings = () => {
  const queryString = `SELECT * FROM DuckFeedings`;
  return pool.query(queryString);
};

////////////////
// DB Inserts //
////////////////
const insertFeeding = valuesArray => {
  const queryString = `INSERT INTO DuckFeedings (
        "date",
        "food",
        "location",
        "number_of_ducks",
        "food_amount",
        "food_units") 
      VALUES 
      ($1, $2, $3, $4, $5, $6);`;
  return pool.query(queryString, valuesArray);
};

module.exports = { getAllFeedings, insertFeeding };
