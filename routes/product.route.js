const express = require("express")
const router = express.Router()
const { getProducts,getProduct, createProduct, updateProduct, deleteProducts } = require("../controllers/product.controller");

router.get('/',getProducts)
router.get('/:id',getProduct)
router.post('/',createProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProducts)

module.exports = router;