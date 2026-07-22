import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { Message } from "./src/models/index.js";
import connectDB from "./src/db/index.js";

connectDB();

const app = express();

dotenv.config();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }),
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));


app.post('/messages', async (req, res) => {
    const message = await Message.create(req.body);
    res.json(message);
});


app.listen(process.env.PORT, function () {
    console.log("Server is running on PORT", process.env.PORT);
});