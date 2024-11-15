import express from "express";
import {
  createProduct,
  getProduct,
  getProducts,
} from "../controllers/product-controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/find/:id", getProduct);

export default router;
