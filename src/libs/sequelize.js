const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const createUserModel = require('../models/User'); // Asegúrate de importar el modelo de usuario

const sequelize = new Sequelize(
  config.dbName, // Nombre de la base de datos
  config.dbUser, // Usuario de la base de datos
  config.dbPassword, // Contraseña de la base de datos
  {
    host: config.dbHost, // Host de la base de datos
    dialect: 'mysql', // Usar MySQL en lugar de 'postgresql'
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos MySQL establecida correctamente.');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

const User = createUserModel(sequelize); // Crea el modelo de usuario

// Define más modelos si es necesario

sequelize.sync();
