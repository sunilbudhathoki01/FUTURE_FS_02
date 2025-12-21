import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth/auth-route.js";
import adminProductRouter from "./routes/admin/productsRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.listen(PORT, () => console.log(`server running on ${PORT}`));

// connect a database
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb successfully connected");
  } catch (error) {
    console.log(error.message);
  }
};

connectDb();

// Routings
app.use("/api/auth", authRoute);
app.use("/api/admin/products", adminProductRouter);
