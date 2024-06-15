import mongoose from "mongoose";
import { ProductDetailModel } from "../model/ProductDetail.model.js";
import { ProductModel } from "../model/products.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const CreateProductDetails = asyncHandler(async (req, res) => {
  const data = req.body;
  const Create = await ProductDetailModel.create({
    ...data,
    user_id: req.user?._id,
  });

  await ProductModel.findByIdAndUpdate(data.product_id, {
    $push: {
      products_details: Create._id,
    },
  });

  return res.status(201).json({
    message: "Product Details Created Successful",
    data: Create,
  });
});

const AdminGetProductDetails = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  const data = await ProductDetailModel.find({ user_id: _id });
  return res.status(200).json({
    message: "data",
    data,
  });
});

const DeleteProductDetails = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const find = await ProductModel.find({ products_details: id });
  console.log(find);

  // const find = await ProductDetailModel.findById(id);

  if (!find) {
    return res.status(403).json({ message: "data is not exist" });
  }

  // await ProductDetailModel.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Product Details delete Successful",
  });
});

const UpdateProductDetails = asyncHandler(async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const find = await ProductDetailModel.findById(id);
  if (!find) {
    return res.status(404).json({
      message: "Product details is not exist",
    });
  }
  await ProductDetailModel.findByIdAndUpdate(id, data);
  return res.status(200).json({
    message: "Product Details update Successful",
  });
});

export {
  CreateProductDetails,
  AdminGetProductDetails,
  DeleteProductDetails,
  UpdateProductDetails,
};
