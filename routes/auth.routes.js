import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", loginUser);

router.get("/profile", protect, (req, res) => {
    res.status(200).json(req.user);
});

export default router;
