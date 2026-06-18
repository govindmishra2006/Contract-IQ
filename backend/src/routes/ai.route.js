import express from "express"
import { testAI,summarizeUploadedContract,analyzeContractRisks } from "../controllers/ai.controller.js"

const router = express.Router();

router.get("/test",testAI);
router.get("/summary/:id",summarizeUploadedContract);
router.get("/risks/:id",analyzeContractRisks);
export default router;