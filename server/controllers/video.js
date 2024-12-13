import Video from "../models/Video.js";
import { uploadImageCloudinary, uploadVideoCloudinary } from "../utils/uploadImageCloudinary.js";

export const addVideo = async (req, res, next) => {
    try {
        let imgUrl = null;
        let videoUrl = null;

        // Check if image is provided
        if (req.files && req.files.image) {
            console.log("Uploading image to Cloudinary...");
            const imageUpload = await uploadImageCloudinary(req.files.image[0]);
            imgUrl = imageUpload.url;
            console.log("Image uploaded successfully:", imgUrl);
        } else {
            console.log("No image provided for upload.");
        }

        // Check if video is provided
        if (req.files && req.files.video) {
            console.log("Uploading video to Cloudinary...");
            const videoUpload = await uploadVideoCloudinary(req.files.video[0]);
            videoUrl = videoUpload.url;
            console.log("Video uploaded successfully:", videoUrl);
        } else {
            console.log("No video provided for upload.");
        }

        // Create a new video entry
        const newVideo = new Video({
            userId: req.user._id, // Get the user ID from the request context
            ...req.body, // Include userId, title, desc, etc.
            imgUrl,
            videoUrl,
        });

        await newVideo.save();
        res.status(200).json({ message: "Video added successfully", newVideo });
    } catch (err) {
        console.error("Error adding video:", err);
        next(err);
    }
};



export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) return next(createError(404, "Video not found!"));
        res.status(200).json(video);
    } catch (err) {
        next(err);
    }
};

// Add View to Video
export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });
        res.status(200).json("The view count has been increased.");
    } catch (err) {
        next(err);
    }
};

// Trending Videos (sorted by views)
export const trend = async (req, res, next) => {
    try {
        const videos = await Video.find().sort({ views: -1 }).limit(10);
        res.status(200).json(videos);
    } catch (err) {
        next(err);
    }
};

// Random Videos
export const random = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 10 } }]);
        res.status(200).json(videos);
    } catch (err) {
        next(err);
    }
};

// Videos from Subscribed Channels
export const sub = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const subscribedChannels = user.subscribedUsers;

        const list = await Promise.all(
            subscribedChannels.map((channelId) => {
                return Video.find({ userId: channelId });
            })
        );

        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    } catch (err) {
        next(err);
    }
};

// Videos by Tag
export const getByTag = async (req, res, next) => {
    const tags = req.query.tags.split(",");
    try {
        const videos = await Video.find({ tags: { $in: tags } }).limit(20);
        res.status(200).json(videos);
    } catch (err) {
        next(err);
    }
};

// Search Videos
export const search = async (req, res, next) => {
    const query = req.query.q;
    try {
        const videos = await Video.find({
            title: { $regex: query, $options: "i" },
        }).limit(20);
        res.status(200).json(videos);
    } catch (err) {
        next(err);
    }
};


export const getallVideos = async (req, res, next) => {
    try {
      const videos = await Video.find().populate('userId', 'name profileImg');
      res.status(200).json(videos);
    } catch (err) {
      next(err);
    }
  }


  export const getRecommendedVideos = async (req, res) => {
    try {
      // Fetch the current video by ID
      const currentVideo = await Video.findById(req.params.id);
      
      if (!currentVideo) {
        return res.status(404).json({ message: "Video not found" });
      }
  
      // Get the tags of the current video
      const tags = currentVideo.tags;
  
      // Find other videos with the same tags, excluding the current video
      const recommendedVideos = await Video.find({
        _id: { $ne: req.params.id }, // Exclude the current video
        tags: { $in: tags }, // Find videos with matching tags
      }).limit(10); // Limit to 10 recommendations
  
      // Return the recommended videos
      res.status(200).json(recommendedVideos);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
