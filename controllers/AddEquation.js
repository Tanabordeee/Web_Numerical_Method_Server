// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
// exports.AddEquation = async(req ,res) =>{
//     const { equation } = req.body;
//     try{
//         const equation_admin = await prisma.Question.create({
//             data: {
//                 equation : equation
//             }
//         });
//         return res.status(200).json({ "Message": "equation created successfully" });
//     }catch(err){
//         return res.status(400).json({ "Message": err.message });
//     }
// }
