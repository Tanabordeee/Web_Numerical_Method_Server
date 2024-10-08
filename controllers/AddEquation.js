const prisma = require('../lib/prisma');

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

exports.AddLinearEquation = async (req, res) => {
    console.log("Initializing Prisma Client...");

    const {matrixA, matrixB } = req.body;

    if (!matrixA || !matrixB) {
        return res.status(400).json({ "Message": "Please provide matrixA, and matrixB." });
    }

    try {
        const linearQuestion = await prisma.LinearQuestion.create({
            data: {
                matrixA: matrixA, 
                matrixB: matrixB 
            }
        });

        console.log("Linear Question created successfully");

        return res.status(200).json({
            "Message": "Linear Question created successfully",
            "LinearQuestion": linearQuestion
        });

    } catch (err) {
        console.error("Error in Prisma Client operation:", err);
        return res.status(400).json({ "Message": err.message });
    }
};