import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

import connectDB from "./config/db.js";
import complaintRoutes from "./routes/complaintRoutes.js";
dotenv.config();
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on 5000");
});