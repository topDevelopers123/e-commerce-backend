// local import
import mongoose, { Schema } from "mongoose";

const ProductDetail = new Schema(
  {
    product_id:{
      type:Schema.Types.ObjectId,
      ref:"Product",
      required:true
    },
    Size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
    },
    MRP: {
      type: Number,
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    selling_quantity: {
      type: String,
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const ProductDetailModel = mongoose.model(
  "ProductDetail",
  ProductDetail
);
