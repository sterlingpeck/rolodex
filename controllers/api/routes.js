// const express = require("express");
// const router = express.Router();
// const db = require("./config/connection");
// var Contact = require("../../models/contact_card_model");

// // router.get("/", (req, res) => {
// //   res.sendFile(path.join(__dirname, "../../public/index.html"));
// // });

// // router.get("/login", (req, res) => {
// //   res.sendFile(path.join(__dirname, "../../public/login.html"));
// // });

// // route for contact_cards
// router.post("/", (req, res) => {
//   Contact.create({
//     id: req.body.id,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     phone: req.body.phone,
//   })
//     .then((Contact) => res.json(Contact))
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json(error);
//     });
// });

// // // Create a contact
// // router.post("/api/contactpost", ({ body }, res) => {
// //   const sql = `INSERT INTO contact_card (firstname, lastname, email, phone) VALUES (?,?,?,?)`;
// //   console.log(body);
// //   const params = [body.firstname, body.lastname, body.email, body.phone];
// //   db.query(sql, params, (err, result) => {
// //     if (err) {
// //       res.status(400).json({ error: err.message });
// //       return;
// //     }
// //     res.json({
// //       message: "success",
// //       data: body,
// //       changes: result.affectedRows,
// //     });
// //   });
// // });

// // router.get("/api/contactget", (req, res) => {
// //   console.log("get contacts", req);
// //   const sql = `SELECT * FROM contact_card
// //                   AS contacts
// //                   FROM contact_card`;
// //   db.query(sql, (err, rows) => {
// //     if (err) {
// //       res.status(500).json({ error: err.message });
// //       return;
// //     }
// //     res.json({
// //       message: "success",
// //       data: rows,
// //     });
// //   });
// // });

// module.exports = router;
