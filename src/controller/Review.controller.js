
import { reviewModel } from "../model/review.model.js";



const CreateProduct = asyncHandler(async (req, res) => {
  const data = req.body;

  const Create = await reviewModel.create({ ...data, user_id: req.user?._id });

  return res.status(201).json({
    message: "Review Send",
    data: Create,
  });
});



const DeleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const find = await reviewModel.findById(id);

  if (!find) {
    return res.status(403).json({ message: "data is not exist" });
  }

  await reviewModel.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Review delete Successful",
  });
});

export {CreateProduct,DeleteProduct}