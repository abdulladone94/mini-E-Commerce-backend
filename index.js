import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import productRoute from "./routes/product.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

app.use("/api/products", productRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";

  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend on port 8800");
});
