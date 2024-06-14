import { subCategoryModel } from "../model/sub_category.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createSubCategory = asyncHandler(async (req, res) => {
  const data = req.body;

  const find = await subCategoryModel.find({
    parent_category: data.parent_category,
  });

  if (find) {
    return res.status(400).json({ message: "parent category already exist" });
  }
  await subCategoryModel.create(data);
  res.status(200).json({ message: "subcategory created successfully" });
});

const getSubCategory = asyncHandler(async (req, res) => {
  const data = await subCategoryModel.find();

  if (!data) {
    res.status(404).json({ message: "subCategory do not exist" });
  }

  res.status(200).json({ data, message: "send all sub-category" });
});

const DeleteSubCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const find = await subCategoryModel.find({ parent_category: id });
  if (!find)
    return res.status(404).json({ message: "Sub-Category do not exist" });

  await subCategoryModel.findByIdAndDelete(id);
  res.status(200).json({ message: "Sub-Category deleted successfully" });
});

const UpdateSubCategory = asyncHandler(async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const find = await subCategoryModel.findById(id);

  if (!find)
    return res.status(404).json({ message: "Sub-Category do not exist" });

  await subCategoryModel.findByIdAndUpdate(id, data);

  res.status(200).json({ message: "Sub-Category updated successfully " });
});

export {
  createSubCategory,
  getSubCategory,
  DeleteSubCategory,
  UpdateSubCategory,
};