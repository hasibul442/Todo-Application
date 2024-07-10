import express from "express";
import healthCheck from "../Controller/HealthCheckController.js";

const router = express.Router();

router.get("/health", (req, res) => {
  healthCheck(req, res);
});

export default router;