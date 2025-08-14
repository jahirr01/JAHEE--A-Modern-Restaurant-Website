import express from "express";
// The path has been corrected to use the singular folder name 'controller'
import { sendCustomOrder } from "../controller/customOrderController.js";

const router = express.Router();

router.post("/send", sendCustomOrder);

export default router;
