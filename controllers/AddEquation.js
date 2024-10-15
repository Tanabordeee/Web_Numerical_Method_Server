const prisma = require('../lib/prisma');

exports.AddEquation = async(req, res) => {
    const { equation = null , XL = null , XR = null , Gval = null , SGval = null} = req.body;
    try {
        const equation_admin = await prisma.RootQuestion.create({
            data: {
                equation: equation ,
                XL : XL,
                XR : XR,
                Gval : Gval,
                SGval : SGval
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
    const {matrixA, matrixB , matrixX = null} = req.body;
    if (!matrixA || !matrixB) {
        return res.status(400).json({ "Message": "Please provide matrixA, and matrixB." });
    }
    try {
        const linearQuestion = await prisma.LinearQuestion.create({
            data: {
                matrixA: matrixA, 
                matrixB: matrixB,
                matrixX : matrixX
            }
        });
        return res.status(200).json({
            "Message": "Linear Question created successfully",
            "LinearQuestion": linearQuestion
        });

    } catch (err) {
        console.error("Error in Prisma Client operation:", err);
        return res.status(400).json({ "Message": err.message });
    }
};


exports.AddInterpolation = async (req , res) =>{
    const {size , matrixX , matrixY , xValue} = req.body;
    try{
        const InterpolationQuestion = await prisma.InterpolationQuestion.create({
            data :{
                size :size,
                matrixX : matrixX,
                matrixY : matrixY,
                xValue:xValue
            }
        });
        return res.status(200).json({"Message": "Interpolation Question created successfully" , "InterpolationQuestion":InterpolationQuestion})
    }catch(err){
        return res.status(400).json({ "Message": err.message });
    }
}


exports.AddExtrapolation = async (req , res) =>{
    const {size = null , xValue = null , mOrder = null , kOrder = null , matrixX = null , matrixY = null , DataX = null , ArrayX = null } = req.body;
    try{
        const ExtrapolationQuestion = await prisma.ExtrapolationQuestion.create({
            data :{
                size:size,
                xValue:xValue,
                mOrder:mOrder,
                kOrder:kOrder,
                matrixX:matrixX,
                matrixY:matrixY,
                DataX:DataX,
                ArrayX:ArrayX
            }
        })
        return res.status(200).json({"Message": "Extrapolation Question created successfully" , "ExtrapolationQuestion":ExtrapolationQuestion})
    }catch(err){
        return res.status(400).json({ "Message": err.message });
    }
}

exports.AddIntegration = async (req , res) =>{
    const {low , upper , n = null , equation} = req.body;
    try{
        const IntegrationQuestion = await prisma.IntegrationQuestion.create({
            data :{
                low:low,
                upper:upper,
                n:n,
                equation:equation
            }
        })
        return res.status(200).json({"Message": "Integration Question created successfully" , "IntegrationQuestion":IntegrationQuestion})
    }catch(err){
        return res.status(400).json({ "Message": err.message });
    }
}


exports.AddDifferentiation = async (req , res) =>{
    const {equation , x , h} = req.body;
    try{
        const DifferentiationQuestion  = await prisma.DifferentiationQuestion .create({
            data :{
                equation :equation,
                x:x,
                h:h
            }
        })
        return res.status(200).json({"Message": "Differentiation Question created successfully" , "DifferentiationQuestion":DifferentiationQuestion})
    }catch(err){
        return res.status(400).json({ "Message": err.message });
    }
}