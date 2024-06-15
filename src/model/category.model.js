import mongoose, { Schema } from "mongoose";
import { images } from "./Images.model.js";
const category = new Schema(
  {
    category_name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: images,
    },
  },
  { timestamps: true }
);

export const categoryModel = mongoose.model("Category", category);
