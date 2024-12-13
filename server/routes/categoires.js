import express from "express";
import { addCategory, getCategories, getVideosByCategoryName } from "../controllers/category.js";
import { verifyToken } from "../verifyToken.js";
import upload from '../middleware/multer.js';
const router = express.Router();

// Only admins can add categories
router.post("/", upload.single('cimgUrl'),verifyToken, addCategory);
router.get("/getall", getCategories);

// Fetch products by category ID
router.get("/category-name/:categoryName", getVideosByCategoryName);

export default router;
