const prisma = require('../lib/prisma');
exports.GetEquation = async (req, res) => {
    try {
        const equation = await prisma.Question.findMany();
        return res.status(200).json({ "equation": equation });
    } catch (err) {
        console.error("Error fetching equations:", err);
        return res.status(404).json({ "Message": err.message });
    }
};

exports.GetLinearEquation = async (req, res) => {
    try{
        const equation = await prisma.LinearQuestion.findMany();
        return res.status(200).json({ "equation": equation});
    }catch (err){
        console.error("Error fetching equations:", err);
        return res.status(404).json({ "Message": err.message });
    }
}