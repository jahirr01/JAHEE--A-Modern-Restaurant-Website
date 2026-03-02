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

/* ✅ PRODUCTION-SAFE CORS CONFIG */
const allowedOrigins = [
  "http://localhost:5173", // Vite local
  "http://localhost:3000", // React local (if used)
  "https://jahee-a-modern-restaurant-website-u.vercel.app" // Vercel frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// ✅ Handle preflight explicitly
app.options("*", cors());

/* -------------------- Middleware -------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- Database -------------------- */
dbconnection();

/* -------------------- Routes -------------------- */
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/custom-order", customOrderRouter);

/* -------------------- Error Handler -------------------- */
app.use(errorMiddleware);

export default app;
