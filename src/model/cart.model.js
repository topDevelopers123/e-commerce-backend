import mongoose, { Schema } from "mongoose";

const cart = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "",
      required: true,
    },
    // color:{
    //     type:Schema.Types.ObjectId,
    //     ref:"",
    //     required:true
    // },
    size: {
      type: Schema.Types.ObjectId,
      ref: "",
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "",
    },
  },
  { timestamps: true }
);

export const cartSchema = mongoose.model("Cart", cart);
