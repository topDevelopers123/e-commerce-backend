import Mongoose, { Schema } from "mongoose";

const returnSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    product_detail_id: {
      type: Schema.Types.ObjectId,
      ref: "ProductDetail",
      required: true,
    },
    approved: {
      type: Boolean,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    upi_account_no: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ReturnModel = Mongoose.model("Return", returnSchema);
