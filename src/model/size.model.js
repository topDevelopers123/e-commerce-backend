// local import
import mongoose, { Schema } from "mongoose";

const size = new Schema(
  {
    productSize: {
      type: [String],
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    MRP: {
      type: Number,
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const sizeSchema = mongoose.model("Size", size);
