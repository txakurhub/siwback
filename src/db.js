require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, PRODUCTION, DATABASE_URL, DB_NAME } =
  process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "ns5.todositios.com",
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 30000,
  },
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

const { User, Ticket } = sequelize.models;

User.hasMany(Ticket, { foreignKey: "UserId" });
Ticket.belongsTo(User, { foreignKey: "UserId" });
module.exports = {
  User,
  Ticket,
  conn: sequelize,
};
