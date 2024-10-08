const express = require('express');
const router = express.Router();
const {AddEquation , AddLinearEquation} = require("../controllers/AddEquation");
const {GetEquation , GetLinearEquation} = require("../controllers/GetEquation");
router.get("/Getequation", GetEquation);
router.post("/AddEquation" , AddEquation);
router.get("/GetLinearEquation", GetLinearEquation);
router.post("/AddLinearEquation" , AddLinearEquation);
module.exports = router;