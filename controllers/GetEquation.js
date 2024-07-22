const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.GetEquation = async (req , res) =>{
    try{
        const equation = await prisma.Question.findMany()
        return res.status(200).json({"equation":equation});
    }catch(err){
        return res.status(400).json({ "Message": err.message });
    }
}