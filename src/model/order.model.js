// local import
import mongoose, { Schema } from "mongoose";

const order = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "",
    },
    address_id: {
      type: Schema.Types.ObjectId,
      ref: "",
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

export const orderSchema = mongoose.model("Order", order);
