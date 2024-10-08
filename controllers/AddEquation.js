const prisma = require('../lib/prisma');

// AddEquation function
exports.AddEquation = async(req, res) => {
    console.log("Initializing Prisma Client...");
    try {
        const equation_admin = await prisma.Question.create({
            data: {
                equation: req.body.equation
            }
        });
        console.log("Equation created successfully");
        return res.status(200).json({ "Message": "equation created successfully" });
    } catch (err) {
        console.error("Error in Prisma Client initialization:", err);
        return res.status(400).json({ "Message": err.message });
    }
};