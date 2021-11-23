// Import express
import express from "express";
// Import Product Controller
import { 
    getItems,
    getItemById,
    // createProduct,
    // updateProduct,
    // deleteProduct
 } from "../controllers/client.Item.controller.js";
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/shop', getItems);
// // Route get product by id
router.get('/shop/:id', getItemById);
// // Route create a new product
// router.post('/products', createProduct);
// // Route update product by id
// router.put('/products/:id', updateProduct);
// // Route delete product by id
// router.delete('/products/:id', deleteProduct);
 
// export router
export default router;