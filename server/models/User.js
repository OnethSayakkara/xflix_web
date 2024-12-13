import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false, // Optional, set to true if name must be unique
    },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validates email format
    },
    password: {
      type: String,
      required: true, // Ensure it is hashed before saving
    },
    profileImg: {
      type: String,
      default:"", // URL or Base64 string for image
    },
    subcribers:{
        type:Number,
        default:0,
    },
    subcribedUsers:{
        type:[String]
        
    },
    role: {
      type: String,
      enum: ["Genaral", "Model", "Admin"],
      default:"Genaral",
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export default mongoose.model("User", UserSchema);
