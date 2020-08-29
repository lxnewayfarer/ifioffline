
const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "postgres", {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
  logging: (msg) => console.log(msg)
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Users = require("./User.js")(sequelize, Sequelize)

module.exports = db
