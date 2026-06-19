import express from "express"
import { testAI,summarizeUploadedContract,analyzeContractRisks,chatWithContract,extractContractClauses,compareTwoContracts,redlineContractClause } from "../controllers/ai.controller.js"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const router = express.Router();

router.get("/test",testAI);
router.get("/summary/:id",summarizeUploadedContract);
router.get("/risks/:id",analyzeContractRisks);
router.post("/chat/:id",chatWithContract);
router.post("/clauses/:id",extractContractClauses);
router.post("/compare", compareTwoContracts);
router.post("/redline", redlineContractClause);
export default router;