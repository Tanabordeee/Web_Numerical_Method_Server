const prisma = require('../lib/prisma');

exports.GetLinearEquation = async (req, res) => {
    try{
        const equation = await prisma.LinearQuestion.findMany();
        return res.status(200).json({ "equation": equation});
    }catch (err){
        console.error("Error fetching equations:", err);
        return res.status(404).json({ "Message": err.message });
    }
}
exports.GetRootEquation = async (req, res) => {
    try {
        const equation = await prisma.RootQuestion.findMany();
        return res.status(200).json({ "equation": equation });
    } catch (err) {
        console.error("Error fetching equations:", err);
        return res.status(404).json({ "Message": err.message });
    }
};
exports.GetInterpolation = async (req, res) => {
    try{
        const equation = await prisma.InterpolationQuestion.findMany();
        return res.status(200).json({ "equation": equation});
    }catch (err){
        console.error("Error fetching equations:", err);
        return res.status(404).json({ "Message": err.message });
    }
}

exports.GetExtrapolation = async (req, res) => {
    try{
        const equation = await prisma.ExtrapolationQuestion.findMany();
        return res.status(200).json({ "equation": equation});
    }catch (err){
        console.error("Error fetching equations:", err);
        return res.status(404).json({ "Message": err.message });
    }
}

exports.GetIntegration = async (req, res) => {
    try{
        const equation = await prisma.IntegrationQuestion.findMany();
        return res.status(200).json({ "equation": equation});
    }catch (err){
        console.error("Error fetching equations:", err);
        return res.status(404).json({ "Message": err.message });
    }
}

exports.GetDifferentiation = async (req, res) => {
    try{
        const equation = await prisma.DifferentiationQuestion.findMany();
        return res.status(200).json({ "equation": equation});
    }catch (err){
        console.error("Error fetching equations:", err);
        return res.status(404).json({ "Message": err.message });
    }
}