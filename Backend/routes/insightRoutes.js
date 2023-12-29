

import express from "express";
import insightController from "../Controllers/insightController.js";
const router = express.Router();

router.get("/", insightController.getAllInsights);

export default router;
