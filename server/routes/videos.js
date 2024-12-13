import express from "express";
import { addVideo,getallVideos,addView,getRecommendedVideos } from "../controllers/video.js";
import upload from "../middleware/multer.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Upload image and video
router.post(
    "/",
    upload.fields([
        { name: "image", maxCount: 1 }, // For image file
        { name: "video", maxCount: 1 }, // For video file
    ]),
    verifyToken,
    addVideo
);

router.get("/getall", getallVideos)

router.put("/view/:id", addView)

router.get("/:id/recommendations", getRecommendedVideos);

export default router;
