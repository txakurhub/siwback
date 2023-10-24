const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require('./routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app