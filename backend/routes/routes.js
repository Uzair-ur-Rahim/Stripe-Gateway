import express from "express";
const router = express.Router();


import { createCategoryController, getAllCategories } from "../controller/categoryController.js";
import { createProduct, getproductbyId } from "../controller/productController.js";
import { stripeGateway } from "../controller/stripeController.js";


router.post("/api/categories", createCategoryController);
router.get("/api/categories", getAllCategories)

router.post("/api/products", createProduct)
router.get("/api/products/:categoryId", getproductbyId)

router.post("/api/payments/create-session", stripeGateway)



export default router;
