import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import categoryRoutes from './routes/categoires.js';
import videoRoutes from './routes/videos.js';
import cors from "cors";
import http from 'http'; // Import the http module

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("MongoDB Connected...");
    }).catch((err) => {
        throw err;
    });
};

// Middleware configuration
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

// Routes configuration
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/videos", videoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// Create HTTP server and set timeout
const server = http.createServer(app);
server.timeout = 300000; // Set timeout to 5 minutes (300,000 ms)

// Start the server
server.listen(8800, () => {
    connect();
    console.log("XFlix Server is running!");
});
