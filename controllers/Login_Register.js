const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
exports.Register = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        if (!username.trim() || !password.trim() || !email.trim()) {
            return res.status(400).json({ "Message": "username, password, and email are required" });
        }
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ "Message": "This email is already registered" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = await prisma.user.create({
                data: {
                    email: email,
                    name: username,
                    password: hashedPassword
                }
            });
            return res.status(200).json({ "Message": "User created successfully" });
        } catch (err) {
            return res.status(400).json({ "Message": err.message });
        }
    } catch (e) {
        return res.status(500).json({ "Message": "Internal server error" });
    }
};

exports.Login = async (req , res) => {
    const { email , password } = req.body;
    try{
        const user = await prisma.user.findUnique({where: {email}});
            if(user){
                const isPasswordValid = await bcrypt.compare(password , user.password);
                if(isPasswordValid){
                    const token = jwt.sign({password} , process.env.JWT_SECRET , {expiresIn:"1d"})
                    return res.status(200).json({"Message":"Successfully logged in" , "token":token});
                }else{
                    return res.status(400).json({"Message":"your password is wrong"});
                }
            }else{
                return res.status(400).json({"Message":"your email is wrong"});
            }
    }catch(err){
        return res.status(500).json({ "Message": "Internal server error" });
    }
}
exports.requireLogin = expressJwt.expressjwt({
    secret : process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})