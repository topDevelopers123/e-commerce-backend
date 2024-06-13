import mongoose, { Schema } from "mongoose";

const products = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
    },
    MRP: {
      type: Number,
      trim: true,
      required: true,
    },
    selling: {
      type: Number,
      trim: true,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "",
      required: true,
    },

    sub_category: {
      type: Schema.Types.ObjectId,
      ref: "",
      required: true,
    },
    sub_inner_category: {
      type: Schema.Types.ObjectId,
      ref: "",
      required: true,
    },
    stock: {
      type: Number,
      trim: true,
      required: true,
    },
    local_charges: {
      type: Number,
      trim: true,
      required: true,
    },
    zonal_charges: {
      type: Number,
      trim: true,
      required: true,
    },
    national_charges: {
      type: Number,
      trim: true,
      required: true,
    },
    local_deadline: {
      type: String,
      trim: true,
      required: true,
    },
    zonal_deadline: {
      type: String,
      trim: true,
      required: true,
    },
    national_deadline: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", products);
