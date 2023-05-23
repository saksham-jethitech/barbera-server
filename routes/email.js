import express from "express";
import { contactUsHandler, careerHandler } from "../controllers/email.js";

const router = express.Router();

router.post("/contactUs", contactUsHandler);
router.post("/career", careerHandler);

export default router;
