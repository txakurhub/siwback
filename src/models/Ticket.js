const { DataTypes } = require("sequelize");

const TICKET_TABLE = "factura";

const Ticket = (sequelize) => {
  return sequelize.define(
    "Ticket",
    {
      idFactura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      tableName: TICKET_TABLE,
      timestamps: false,
    }
  );
};
Ticket.associate = (models) => {
  Ticket.belongsTo(models.User, { foreignKey: "cliente" });
};

module.exports = Ticket;
