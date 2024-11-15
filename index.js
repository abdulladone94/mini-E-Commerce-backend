import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend on port 8800");
});
