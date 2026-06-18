import express from "express"
import { testAI,summarizeUploadedContract,analyzeContractRisks,chatWithContract } from "../controllers/ai.controller.js"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const router = express.Router();

router.get("/test",testAI);
router.get("/summary/:id",summarizeUploadedContract);
router.get("/risks/:id",analyzeContractRisks);
router.post("/chat/:id",chatWithContract);

export default router;