import express from 'express'
import { createProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/product', createProduct)

const productRouter = router;
export default productRouter;