import mongoose, { Schema } from "mongoose";

const cart = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    productDetails: {
      type: Schema.Types.ObjectId,
      ref: "ProductDetail",
    },
    quantity: {
      type: Number,
      require: true,
      default: 1,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const cartModel = mongoose.model("Cart", cart);
