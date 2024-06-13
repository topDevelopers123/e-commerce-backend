import mongoose, { Schema } from "mongoose";

const review = new Schema(
  {
    image: {
      type: [String],
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "",
      require: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export const reviewSchema = mongoose.model("Review", review);
