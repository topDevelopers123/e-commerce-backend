import { ProductDetailModel } from "../model/ProductDetail.model.js";
import { ProductModel } from "../model/products.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const CreateProduct = asyncHandler(async (req, res) => {
  const data = req.body;

  const Create = await ProductModel.create({ ...data, user_id: req.user?._id });

  return res.status(201).json({
    message: "Product Created Successful",
    data: Create,
  });
});

const GetProduct = asyncHandler(async (_, res) => {
  const data = await ProductModel.find({}).populate("products_details");

  return res.status(200).json({
    message: "Data ",
    data,
  });
});

const AdminGetProduct = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  const data = await ProductModel.find({ user_id: _id });
  return res.status(200).json({
    message: "data",
    data,
  });
});

const DeleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const find = await ProductModel.findById(id);

  if (!find) {
    return res.status(403).json({ message: "data is not exist" });
  }

  await ProductModel.findByIdAndDelete(id);
  await ProductDetailModel.deleteMany({product_id:id})

  return res.status(200).json({
    message: "Product delete Successful",
  });
});

const UpdateProduct = asyncHandler(async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const find = await ProductModel.findById(id);
  if (!find) {
    return res.status(404).json({
      message: "Product is not exist",
    });
  }
  await ProductModel.findByIdAndUpdate(id, data);
  return res.status(200).json({
    message: "Product update Successful",
  });
});

export {
  CreateProduct,
  GetProduct,
  AdminGetProduct,
  DeleteProduct,
  UpdateProduct,
};
