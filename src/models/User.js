const { DataTypes } = require("sequelize");

const USER_TABLE = "users";

const User = (sequelize) => {
  return sequelize.define(
    "User",
    {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "username",
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "password",
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "email",
      },
    },
    {
      tableName: USER_TABLE,
      timestamps: false,
    }
  );
};
User.associate = (models) => {
  User.hasMany(models.Ticket, { foreignKey: "cliente" });
};
module.exports = User;
