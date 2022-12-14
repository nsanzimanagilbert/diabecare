import express from "express";
import {
  authUser,
  getProfile,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);

export default router;
