import mongoose, { Schema } from "mongoose";

const cart = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    size: {
      type: Schema.Types.ObjectId,
      ref: "Size",
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const cartSchema = mongoose.model("Cart", cart);
