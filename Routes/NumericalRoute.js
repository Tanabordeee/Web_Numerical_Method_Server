const express = require('express');
const router = express.Router();
const {Graphical_Method} = require("../controllers/Graphical_Method");
const {Bisection_Method} = require("../controllers/Bisection_Method");
const {FalsePosition_Method} = require("../controllers/FalsePosition_Method");
const {Register , Login , requireLogin} = require("../controllers/Login_Register");
router.post("/Register" , Register);
router.post("/Login" , Login);

router.use(requireLogin);
router.post("/Graphical" , Graphical_Method);
router.post("/Bisection" , Bisection_Method);
router.post("/FalsePosition" , FalsePosition_Method);
module.exports = router;