import { addressModel } from "../model/address.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addAddress = asyncHandler(async (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).json({
    message: "address created successful",
  });
});

export { addAddress };
