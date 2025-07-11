import  {User}  from './../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found", success: false });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 24 * 60 * 60 * 1000, // 1 day
            })
            .json({ message: `Welcome back ${user.username}`,user, success: true });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const logout = async (req,res)=>{
    try {
        return res
            .status(200)
            .cookie("token", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                expires: new Date(Date.now()),
            })
            .json({message: "Logged out successfully", success: true});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Internal server error", success: false}); 
    }
}

export const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({message: "All fields are required",success : false});
        }
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: "User already exists", success: false});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({username, email, password : hashedPassword});
        return res.status(201).json({message: "User registered successfully", success: true});

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error", success: false});
    }
}