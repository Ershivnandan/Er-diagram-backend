import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from 'dotenv';
import http from 'http';
import connectDB from "./src/utils/db.js";
import userRoute from "./src/routes/user.route.js";
import projectRoute from "./src/routes/project.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/project", projectRoute)

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});