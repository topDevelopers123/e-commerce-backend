import mongoose, { Schema } from "mongoose";

const banner = new Schema(
  {
    image: {
      type: [String],
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const bannerModel = mongoose.model("Banner", banner);
