import { UserModel } from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const createUser = asyncHandler(async (req, res) => {
  const data = req.body;

  const findUser = await UserModel.findOne({ email: data.email });

  if (findUser) {
    return res.status(400).json({
      message: "Email already exist",
    });
  }

  const Create = await UserModel.create(data);
  Create.password = null;

  const token = jwt.sign(
    { id: Create._id, email: Create.email },
    process.env.SECRET_KEY
  );

  return res.status(201).json({
    message: "User register successful",
    data: Create,
    token,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({
      message: `${!email ? "email is required" : !password && "password is required"}`,
    });
  }

  const findUser = await UserModel.findOne({
    $or: [{ email: email }, { phone: email }],
  });

  const check = await findUser.Checkpassword(password);

  if (!check) {
    return res.status(404).json({
      message: "Wrong Password",
    });
  }

  findUser.password = null;

  const token = jwt.sign(
    { id: findUser._id, email: findUser.email },
    process.env.SECRET_KEY
  );

  return res.status(200).json({
    message: "Login Successful",
    data: findUser,
    token,
  });
});

export { createUser, loginUser };
