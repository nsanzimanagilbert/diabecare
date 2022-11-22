import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import { getProducts, getProduct } from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProduct);

export default router;
