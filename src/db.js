require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, PRODUCTION, DATABASE_URL, DB_NAME } =
  process.env;

// Sequelize > MySQL - Config

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "ns5.todositios.com",
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 30000 // Aumenta el tiempo de espera a 30 segundos (o el valor que consideres apropiado).
  }
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

// Models
const { User, Ticket } = sequelize.models;

// Relation
User.hasMany(Ticket);
Ticket.belongsTo(User);

module.exports = {
  User,
  Ticket,
  conn: sequelize,
};
