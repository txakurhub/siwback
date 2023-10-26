const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/getuser", authController.getUserInfo);
router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.put("/update", authController.update);
router.put("/recovery", authController.recovery);

module.exports = router;
