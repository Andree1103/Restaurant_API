const { Router } = require("express");
const { createUser } = require("../controllers/user.controllers");

const router = Router();

router.post("/users", createUser);

module.exports = router;
