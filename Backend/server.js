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

const app = express();

const port = process.env.PORT || 3000;

const authCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
    maxAge: 24 * 60 * 60 * 1000

};
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .concat("https://mern-stack-project-seven-lake.vercel.app")
    .filter((origin, index, origins) => origin && origins.indexOf(origin) === index);
const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;

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
    const { names, email, password } = req.body;

    if (!isNonEmptyString(names) || !isNonEmptyString(email) ||
        !isNonEmptyString(password) || password.length < 8) {
        return res.status(400).json({
            message: "Name, valid email, and a password of at least 8 characters are required."
        });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
        return res.status(409).json({
            message: "An account with this email already exists."
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ names, email: normalizedEmail, password: hashedPassword });

    res.status(201).json({
        message: "Registration successful. Please login to your account."
    });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = isNonEmptyString(email)
        ? await User.findOne({ email: email.trim().toLowerCase() })
        : null;

    if (!user || !isNonEmptyString(password) || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({
            message: "Invalid email or password."
        });
    }

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
    res.cookie('token', token, authCookieOptions);
    res.json({ message: "Login successful." });
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
    res.status(201).json(message);
});

app.post('/logout', (req, res) => {
    res.clearCookie('token', authCookieOptions);
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

app.use((error, req, res, next) => {
    console.error(error);

    if (error.name === "ValidationError") {
        return res.status(400).json({ message: "Please provide valid input values." });
    }

    if (error.code === 11000) {
        return res.status(409).json({ message: "That value is already in use." });
    }

    res.status(error.status || 500).json({
        message: "Something went wrong. Please try again later."
    });
});

const startServer = async () => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured");
    }

    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer().catch((error) => {
    console.error("Server startup failed:", error);
    process.exit(1);
});