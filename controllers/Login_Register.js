const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

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
