const Sequelize = require("sequelize");
const { dbName, dbUser, dbPassword, dbHost } = require("./config/config");

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost, // host de la base de datos
  dialect: "mysql",
});




module.exports = sequelize;
