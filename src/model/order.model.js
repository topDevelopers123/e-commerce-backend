// local import
import mongoose, { Schema } from "mongoose";

const order = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required:true
    },
    address_id: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required:true
    },
    payment_status: {
      type: String,
      default: "pending",
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model("Order", order);
