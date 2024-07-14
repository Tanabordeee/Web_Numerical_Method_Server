const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const NumericalRoute = require('./Routes/NumericalRoute');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(morgan("dev"));
async function main() {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    }
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
app.use("/api" , NumericalRoute);
app.listen(process.env.PORT , ()=>{
    console.log("listening on port " + process.env.PORT);
})