import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { Message } from "./src/models/message.js";
import { User } from "./src/models/users.js";
import connectDB from "./src/db/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();
const app = express();
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim());

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Origin is not allowed by CORS"));
    },
    credentials: true
}));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get('/', (req, res) => {
    res.json({ status: "ok" });
});

app.post('/register', async (req, res) => {
    try {
        const { names, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists. Please login to your account !!!"
            });
        } else {
            bcrypt.hash(password, 10, async function (err, hash) {
                let newUser = await User.create({
                    names,
                    email,
                    password: hash
                });
                res.status(200).json({
                    message: "Registration successful, Redirecting to Login Page...",
                });
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Registration failed !!!"
        });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found, Please register first !!!"
            });
        } else {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);
                    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'None' });
                    res.status(200).json({
                        message: "Login successful, Redirecting to Home Page...",
                    });
                } else {
                    res.status(400).json({
                        message: "Invalid password, Please try again !!!"
                    });
                }
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Login failed !!!"
        });
    }
});

app.get('/login', isLoggedin, async (req, res) => {
    const user = await User.findById(req.user.id)
        .select("-password");

    res.json({
        user
    });
});

app.post('/messages', async (req, res) => {
    const message = await Message.create(req.body);
    res.json(message);
});

app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: "Logout successful, Redirecting to Login Page...",
    });
});


function isLoggedin(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        console.log("No token found, Please login to access this page !!!");
        return res.status(401).json({
            message: "Please login to access this page !!!"
        });
    } else {
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                console.log("Invalid token, Please login again !!!");
                return res.status(401).json({
                    message: "Invalid token"
                });
            } else {
                req.user = decoded;
                next();
            }
        });
    }
}

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server is running on PORT", port);
});