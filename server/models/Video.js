import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      default:"",
      
    },
    videoUrl: {
      type: String,
      default:"",
    },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", // Reference the Category model
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);