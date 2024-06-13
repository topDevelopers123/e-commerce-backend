import mongoose, { Schema } from "mongoose";

const wishlist = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
export const wishlistSchema = mongoose.model("Wishlist", wishlist);
