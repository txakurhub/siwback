const { Datatypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
      type: Datatypes.UUID,
      primaryKey: true,
    },
    username: {
      type: Datatypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    password: {
      type: Datatypes.STRING(128),
      allowNull: false,
    },
    email:{
        type:Datatypes.STRING(128),
        unique:true,
        allowNull:false
        }
  });
};
