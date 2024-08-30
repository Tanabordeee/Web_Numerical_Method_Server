const express = require('express');
const router = express.Router();
const {AddEquation} = require("../controllers/AddEquation");
router.post("/AddEquation" , AddEquation);
module.exports = router;