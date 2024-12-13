import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    cname: {
      type: String,
      required: true,
    },
    cdesc: {
      type: String,
      required: true,
    },
    cimgUrl: {
      type: String,
      default:"",
    },


  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);