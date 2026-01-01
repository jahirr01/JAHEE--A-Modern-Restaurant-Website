// File: app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { dbconnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./database/error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import customOrderRouter from "./routes/customOrderRoute.js";

const app = express();

// Load env variables
dotenv.config({ path: path.resolve("./config/config.env") });

// ✅ CORS CONFIG (FIXED)
app.use(cors({
  origin: [
    process.env.FRONTEND_URL,
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB connection
dbconnection();

// Routes
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/custom-order", customOrderRouter);

// Error middleware
app.use(errorMiddleware);

export default app;
