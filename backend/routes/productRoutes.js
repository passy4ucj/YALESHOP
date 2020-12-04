import express from 'express'
const router = express.Router()
import { admin, protect } from '../middleware/authMiddleware.js'
import { getProducts, getProductById, deleteProduct, updateProduct, createProduct, createProductReview, getTopProducts } from '../controllers/productController.js'



router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

router.get('/top', getTopProducts)

router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)

router.route('/:id/reviews')
    .post(protect, createProductReview)

export default router