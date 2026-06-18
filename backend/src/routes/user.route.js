import express from "express"

import { signup,login,getMe } from "../controllers/user.controller.js"
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();


router.post("/signup",signup);
router.post("/login",login);
router.post("me",protect,getMe);

export default router;