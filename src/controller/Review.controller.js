import { reviewModel } from "../model/review.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const CreateReview = asyncHandler(async (req, res) => {
  const data = req.body;

  const find = await reviewModel.find({
    product_id: data.product_id,
    user_id: req.user?._id,
  });
  if (find.length > 0) {
    return res.status(400).json({ message: "Review already exist" });
  }

  const Create = await reviewModel.create({ ...data, user_id: req.user?._id });
  return res.status(201).json({
    message: "Review Send",
    data: Create,
  });
});

const DeleteReview = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const find = await reviewModel.findById(id);

  if (!find) {
    return res.status(403).json({ message: "review do not exist" });
  }

  await reviewModel.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Review delete Successful",
  });
});

export { CreateReview, DeleteReview };
