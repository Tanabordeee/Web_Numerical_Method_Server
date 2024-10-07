const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.GetEquation = async (req , res) => {
    try{
        const equation = await prisma.Question.findMany();
        return res.status(200).json({"equation": equation});
    }catch(e){
        return res.status(404).json({ "Message": err.message });
    }
};