import express from "express";
import asyncHandler from "express-async-handler";
import { getAllGlucose , createGlucose} from "../controllers/glucoseController.js";

const router = express.Router();
router.route("/").post(createGlucose);
router.route("/").get(getAllGlucose);

export default router;
