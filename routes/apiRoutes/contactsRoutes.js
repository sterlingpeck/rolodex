const express = require("express");
const router = express.Router();
const db = require("../../config/connection");

// Create a contact
router.post("/api/contactpost", ({ body }, res) => {
  let sql =
    "INSERT INTO contact_card (firstname, lastname, email, phone, created_at, updated_at) VALUES ('" +
    body.firstname +
    "', '" +
    body.lastname +
    "', '" +
    body.email +
    "','" +
    body.phone +
    "', now(), now())";
  console.log(body);
  const params = [body.firstname, body.lastname, body.email, body.phone];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
      changes: result.affectedRows,
    });
  });
});

router.use("/api/contactget", (req, res) => {
  console.log("get contacts", req);
  const sql = `SELECT * FROM contact_card
                  AS contacts 
                  FROM contact_card`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

module.exports = router;
