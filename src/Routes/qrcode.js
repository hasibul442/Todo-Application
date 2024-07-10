import express from "express";
import { genarateQRCode } from "../Controller/GoogleAuthenticatorController.js";
const router = express.Router();

router.get('/generate_QR', function(req, res) {
    genarateQRCode(req, res);
});

export default router;