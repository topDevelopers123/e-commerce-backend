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
  const data = await ProductModel.aggregate([
    {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "product_id",
        as: "ProductDetails",
        pipeline: [
          {
            $project: {
              Size: 1,
              color: 1,
              MRP: 1,
              sellingPrice: 1,
              selling_quantity: 1,
              inStock: 1,
              image: 1,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "reviews",
        localField: "_id",
        foreignField: "product_id",
        as: "Review",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "user_id",
              foreignField: "_id",
              as: "UserDetail",
              pipeline: [
                {
                  $project: {
                    name: 1,
                    email: 1,
                  },
                },
              ],
            },
          },
          {
            $addFields: {
              UserDetails: "$UserDetail",
            },
          },
          {
            $project: {
              UserDetails: 1,
              title: 1,
              message: 1,
              user_id: 1,
              product_id: 1,
              rating: 1,
              image: 1,
            },
          },
        ],
      },
    },
    {
      $project: {
        title: 1,
        description: 1,
        category: 1,
        sub_category: 1,
        sub_inner_category: 1,
        local_charges: 1,
        zonal_charges: 1,
        national_charges: 1,
        local_deadline: 1,
        zonal_deadline: 1,
        national_deadline: 1,
        ProductDetails: 1,
        Review: 1
      }
    }

  ])

  return res.status(200).json({
    message: "Data ",
    data,
  });
});

const AdminGetProduct = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  const data = await ProductModel.aggregate([
    {
      $match: {
        user_id: _id
      }
    },
    {
      $lookup:{
        from: "productdetails",
        localField:"_id",
        foreignField:"product_id",
        as:"adminProduct"
      }
    }
  ])
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
  await ProductDetailModel.deleteMany({ product_id: id });

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
