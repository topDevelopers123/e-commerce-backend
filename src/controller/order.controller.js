import { orderModel } from "../model/order.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const CreateOrder = asyncHandler(async (req, res) => {
  const data = req.body;

  const Create = await orderModel.create({ ...data, user_id: req.user?._id });

  return res.status(201).json({
    message: "Ordered Successful",
    data: Create,
  });
});

const UpdateOrder = asyncHandler(async (req, res) => {
  const { status, payment_status } = req.body;
  const { id } = req.params;

  const find = await orderModel.findById(id);
  if (!find) {
    return res.status(404).json({
      message: "Product is not exist",
    });
  }
  await orderModel.findByIdAndUpdate(id, {
    payment_status: payment_status,
    status: status,
  });
  return res.status(200).json({
    message: `Order ${status} Successful`,
  });
});

export { CreateOrder, UpdateOrder };
