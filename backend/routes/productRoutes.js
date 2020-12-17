import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @desc Fetch all products
// @route GET /api/products
// @access Public - (doesn't require a token to access)
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc Fetch single product
// @route GET /api/product/:id
// @access Public - (doesn't require a token to access)
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);

export default router;
