import express from "express"
import upload from "../middlewares/upload.middleware.js";
import protect from "../middlewares/auth.middleware.js"

import { createContract,getContracts,getContractById,deleteContract,uploadContract } from "../controllers/contract.controller.js"

const router = express.Router();
router.post("/",protect,createContract);
router.get("/",protect,getContracts);
router.get("/:id",protect,getContractById);
router.delete("/:id",protect,deleteContract);
router.post("/upload",protect,upload.single("file"),uploadContract)
export default router;