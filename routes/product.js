import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product-controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/find/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";

  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

export default router;
