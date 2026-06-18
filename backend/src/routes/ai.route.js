import express from "express"
import { testAI,summarizeUploadedContract } from "../controllers/ai.controller.js"

const router = express.Router();

router.get("/test",testAI);
router.get("/summary/:id",summarizeUploadedContract);
export default router;