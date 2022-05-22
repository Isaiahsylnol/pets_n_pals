import express from "express";
import { currentUser } from "../controllers/auth.js";

const router = express.Router();

router.get("/current-user", currentUser)

export default router;