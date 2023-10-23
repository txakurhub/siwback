const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require('./routes');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);
