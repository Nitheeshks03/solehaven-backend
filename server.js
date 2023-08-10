import express from "express";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 5000;
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

