// File: app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import { dbconnection } from './database/dbconnection.js';
import { errorMiddleware } from "./database/error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import customOrderRouter from "./routes/customOrderRoute.js";

const app = express();


dotenv.config({ path: path.resolve('./config/config.env') });

// Enable CORS for your frontend.
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));

// Use middleware to parse JSON and URL-encoded data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database. This runs once during a "cold start"
// and is reused for subsequent "warm starts."
dbconnection();

// Set up your API routes.
app.use('/api/v1/reservation', reservationRouter);
app.use('/api/v1/custom-order', customOrderRouter);

// Set up your error-handling middleware.
app.use(errorMiddleware);

// Export the app instance for Vercel's serverless function.
// This is the crucial part for Vercel deployment!
export default app;
