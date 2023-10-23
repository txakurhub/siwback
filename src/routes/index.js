const express = require("express");
const router = express.Router();

// Imports
const authRoutes = require("./authRouter");
const ticketRoutes = require("./ticketRouter");

// Routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/tickets", ticketRoutes);

module.exports = router;
