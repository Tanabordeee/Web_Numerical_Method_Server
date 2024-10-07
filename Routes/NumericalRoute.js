const express = require('express');
const router = express.Router();
const {AddEquation} = require("../controllers/AddEquation");
const {GetEquation} = require("../controllers/GetEquation");
router.get("/Getequation", GetEquation);
router.post("/AddEquation" , AddEquation);
module.exports = router;