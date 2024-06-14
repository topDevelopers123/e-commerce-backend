import { cartModel } from "../model/cart.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const AddToCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const data = req.body;
  const find = await cartModel.find({ ...data, user_id: _id });
  if (find.length > 0) {
    return res.status(400).json({ message: "item already added" });
  }
  await cartModel.create({ ...data, user: _id });

  res.status(200).json({ message: "item added to cart" });
});


const AddQuantity = asyncHandler(async (req, res) => {
  const id = req.params;
  const { quantity } = req.body;
  const findData = await cartModel.find({ product_id: data._id });
  if (!findData) {
    return res.status(400).json({ message: "cannot add items in cart" });
  }
  await cartModel.findByIdAndUpdate(id, { quantity });
  res.status(200).json({ message: "updated quantity successfully" });
});


const RemoveProductFromCart = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const find = await cartModel.findById(id);

  if (!find) {
    return res.status(400).json({ message: "product do not exist in cart" });
  }
  await cartModel.findByIdAndDelete(id);
  res.status(200).json({ message: "item remove succesfully" });
});


const RemoveAllProduct = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  const find = await cartModel.find({ user_id: _id });
  if (find) {
    await cartModel.deleteMany({ user_id: _id });
    return res.status(200).json({ message: "cart empty successfully " });
  }
  res.status(400).json({ message: "item do not exist in cart" });
});

export { AddToCart, RemoveProductFromCart, AddQuantity, RemoveAllProduct };
