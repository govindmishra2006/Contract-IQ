import express from "express"

import protect from "../middlewares/auth.middleware.js"

import { createContract,getContracts,getContractById,deleteContract } from "../controllers/contract.controller.js"

const router = express.Router();
router.post("/",protect,createContract);
router.get("/",protect,getContracts);
router.get("/:id",protect,getContractById);
router.delete("/:id",protect,deleteContract);
export default router;