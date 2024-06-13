import { UserModel } from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const Generatetoken =async(data)=>{
 
  return jwt.sign(
    { id: data._id, email: data.email },
    process.env.SECRET_KEY
  );
}

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

  const token = await Generatetoken(Create)

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

  if(!findUser){
    return res.status(404).json({
      message:"User not exist"
    })
  }

  const check = await findUser?.Checkpassword(password);

  if (!check) {
    return res.status(404).json({
      message: "Wrong Password",
    });
  }

  findUser.password = null;

  const token = await Generatetoken(findUser)

  return res.status(200).json({
    message: "Login Successful",
    data: findUser,
    token,
  });
});

const Query = async (req,res) => {

  try{
    const data = req.query
    console.log(data)
  }
  catch(error){
    console.log(err)
  }
}

export { createUser, loginUser ,Query};
