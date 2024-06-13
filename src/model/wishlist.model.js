import mongoose, { Schema } from "mongoose";

const wishlist = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "",
      required: true,
    },
  },
  { timestamps: true }
);
export const wishlistSchema = mongoose.model("Wishlist", wishlist);
