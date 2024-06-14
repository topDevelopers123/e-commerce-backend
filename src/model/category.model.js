import mongoose, { Schema } from "mongoose";

const category = new Schema(
  {
    category_name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export const categoryModel = mongoose.model("Category", category);
