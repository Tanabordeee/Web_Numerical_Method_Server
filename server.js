const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const NumericalRoute = require('./Routes/NumericalRoute');
const { PrismaClient } = require('@prisma/client');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(morgan("dev"));
app.use("/api" , NumericalRoute);
app.listen(process.env.PORT , ()=>{
    console.log("listening on port " + process.env.PORT);
})