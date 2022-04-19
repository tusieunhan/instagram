const router = require("express").Router();
const userControllers = require("../Controllers/userControllers")

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);

module.exports = router;