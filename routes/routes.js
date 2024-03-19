const controllers = require("../controllers/userSchemaController")
const express = require("express");
const middleware = require("../middlewares/middleware");
const router = express();


router.post("/signup",controllers.signup)

router.post("/login",controllers.login)


router.get("/userdetails", middleware , controllers.userDetails)


module.exports = router