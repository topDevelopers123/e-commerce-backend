import { orderModel } from "../model/order.model.js";

const CreateOrder = asyncHandler(async (req, res) => {
    const data = req.body;

    const Create = await orderModel.create({ ...data, user_id: req.user?._id });

    return res.status(201).json({
        message: "Ordered Successful",
        data: Create,
    });
});


const UpdateProduct = asyncHandler(async (req, res) => {
    const {status} = req.body;
    const { id } = req.params;

    const find = await orderModel.findById(id);
    if (!find) {
        return res.status(404).json({
            message: "Product is not exist",
        });
    }
    await orderModel.findByIdAndUpdate(id, {status:status});
    return res.status(200).json({
        message: `Order ${status} Successful`,
    });
});


export { CreateOrder, UpdateProduct }