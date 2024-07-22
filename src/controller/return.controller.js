import { ReturnModel } from "../model/return.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const Create = asyncHandler(async (req, res) => {
  const data = req.body;
  await ReturnModel.create({ ...data, user_id: req.user?._id });
  return res.status(201).json({
    message: "Order returned Successful",
  });
});

const Update = asyncHandler(async (req, res) => {
  const { approved } = req.body;
  const { id } = req.params;
  const find = await ReturnModel.findById(id);
  if (!find || find.length < 1) {
    return res.status(400).json({
      message: "Return item not exist",
    });
  }

  await ReturnModel.findByIdAndUpdate(id, { approved }, { new: true });
  
  return res.status(200).json({
    message: "Return approved successful",
  });
});

const Getdata = asyncHandler(async (req, res) => {
  const { query } = req;
  const page = query.page || 1;
  const limit = query.limit || 5;
  const newLimit = limit * (page - 1);
  const data = await ReturnModel.find({})
    .populate("product_id")
    .populate("product_detail_id")
    .populate("address_id")
    .skip(newLimit)
    .limit(limit);
  return res.status(200).json({
    message: "data",
    data,
  });
});

export { Create, Update, Getdata };
