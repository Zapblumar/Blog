const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize("Blog_db", "root", "pineapple", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
