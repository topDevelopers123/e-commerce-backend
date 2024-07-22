import mongoose, { Schema } from "mongoose";

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
    address_id: { 
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    approved: {
      type: Boolean,
    },
    reason: {
      type: String,
      required: true,
    },
    upi_account_no: {
      type: String,
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const ReturnModel = mongoose.model("Return", returnSchema);
