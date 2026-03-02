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

/* -------------------- Load Environment Variables -------------------- */
dotenv.config({ path: path.resolve("./config/config.env") });

/* -------------------- CORS CONFIGURATION -------------------- */
/* Allow both local development and deployed frontend */
const allowedOrigins = [
  "http://localhost:5173", // Vite local
  "http://localhost:3000", // React local (if used)
  "https://jahee-a-modern-restaurant-website-u.vercel.app" // Vercel frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, curl, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

/* -------------------- SAFE PREFLIGHT HANDLER (Fix for Node 22) -------------------- */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Respond to preflight
  }

  next();
});

/* -------------------- Body Parsing Middleware -------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- Database Connection -------------------- */
dbconnection();

/* -------------------- Routes -------------------- */
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/custom-order", customOrderRouter);

/* -------------------- Error Handling -------------------- */
app.use(errorMiddleware);

export default app;
