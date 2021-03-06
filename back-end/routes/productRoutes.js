import e from "express";
import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// Fetch all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(401);
    throw new Error("Not Authorized");
    res.json(products);
  })
);

// Fetch specific product
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
    res.json(product);
  })
);

export default router;
