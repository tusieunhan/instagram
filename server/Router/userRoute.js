const router = require("express").Router();
const userControllers = require("../Controllers/userControllers");

router.post("/register", userControllers.register);
router.post("/verifyuser", userControllers.verifyUser);
router.post("/login", userControllers.login);

module.exports = router;
