// local import
import mongoose, { Schema } from "mongoose";

const order = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    address_id: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
    payment_status: {
      type: String,
      required: true,
      default: "pending",
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model("Order", order);
