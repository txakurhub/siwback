const Sequelize = require("sequelize");

const sequelize = new Sequelize("NOMBREDATABASE", "NOMBREUSER", "PASSWORD", {
  host: "localhost", // host de la base de datos
  dialect: "mysql",
});

module.exports = sequelize;
