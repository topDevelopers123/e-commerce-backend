import mongoose, { Schema } from "mongoose";

const sub_inner_category = new Schema(
  {
    sub_inner_category_name: {
      type: String,
    },
    parent_category1: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    parent_category2: {
      type: Schema.Types.ObjectId,
      ref: "subCategory",
    },
  },
  { timestamps: true }
);
export const subInnerCategorySchema = mongoose.model(
  "subInnerCategory",
  sub_inner_category
);
