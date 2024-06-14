import mongoose, { Schema } from "mongoose";

const sub_category = new Schema(
  {
    sub_category_name: {
      type: String,
    },
    parent_category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);
export const subCategorySchema = mongoose.model("subCategory",sub_category);