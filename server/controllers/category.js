import Category from "../models/Category.js";
import  Video  from "../models/Video.js";
import {uploadImageCloudinary} from "../utils/uploadImageCloudinary.js";


// Add a new category
export const addCategory = async (req, res, next) => {
    try {

        let imageUrl = null;
        if (req.file) {
            console.log('Uploading image to Cloudinary...');
            const upload = await uploadImageCloudinary(req.file);
            imageUrl = upload.url; // Get Cloudinary image URL
            console.log('Image uploaded successfully:', imageUrl);
        } else {
            console.log('No image provided for upload');
        }


        const newCategory = new Category({

            ...req.body,
            cimgUrl: imageUrl,

        }); // Body should include { name: "CategoryName" }
        await newCategory.save();
        res.status(200).send("category has been created.");
    } catch (err) {
        console.error('Error creating category:', err);
      next(err);
    }
};

// Get all categories
export const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        next(err);
    }
};

// Get products by category name
export const getVideosByCategoryName = async (req, res, next) => {
    try {
        const { categoryName } = req.params;

        // Find the category using the name
        const category = await Category.findOne({ name: categoryName });

        if (!category) {
            return res.status(404).json({ 
                success: false, 
                message: "Category not found" 
            });
        }

        // Find videos with the matching categoryId
        const videos = await Video.find({ categoryId: category._id });

        res.status(200).json({
            success: true,
            message: "Videos retrieved successfully",
            data: videos
        });
    } catch (err) {
        next(err);
    }
};

