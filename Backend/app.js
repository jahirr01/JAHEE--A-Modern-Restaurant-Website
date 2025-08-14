import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import { dbconnection } from './database/dbconnection.js';
import { errorMiddleware } from "./database/error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import customOrderRouter from "./routes/customOrderRoute.js"; // Import the new custom order router

const app = express();

dotenv.config({ path: path.resolve('./config/config.env') });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);
app.use('/api/v1/custom-order', customOrderRouter); // Use the new custom order router

dbconnection();

app.use(errorMiddleware);
export default app;
