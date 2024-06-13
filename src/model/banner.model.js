import mongoose, { Schema } from "mongoose";

const banner = new Schema(
  {
    image: {
      type: [String],
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "",
    },
  },
  { timestamps: true }
);

export const bannerSchema = mongoose.model("Banner", banner);
