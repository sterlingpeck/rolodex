var Sequelize = require("sequelize");
const sequelize = require("../config/connection");

// setup User model and its fields.
var Contact = sequelize.define("contact_card", {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

// create all the defined tables in the specified database.
sequelize
  .sync()
  .then(() =>
    console.log(
      "contact_cards table has been successfully created, if one doesn't exist"
    )
  )
  .catch((error) => console.log("This error occured", error));

module.exports = Contact;
