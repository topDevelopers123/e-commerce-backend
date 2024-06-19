import { messages } from "@vinejs/vine/defaults";
import { UserModel } from "../model/user.model.js";
import { SendMail } from "../utils/EmailHandler.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { ImageUpload, deleteImage } from "../utils/ImageHandler.js";

let ChangePasswordOtp = null;

let OTP = null;

const Generatetoken = async (data) => {
  return jwt.sign({ id: data._id, email: data.email }, process.env.SECRET_KEY);
};

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

  const token = await Generatetoken(Create);

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

  if (!findUser) {
    return res.status(404).json({
      message: "User not exist",
    });
  }

  const check = await findUser?.Checkpassword(password);

  if (!check) {
    return res.status(404).json({
      message: "Wrong Password",
    });
  }

  findUser.password = null;

  const token = await Generatetoken(findUser);

  return res.status(200).json({
    message: "Login Successful",
    data: findUser,
    token,
  });
});

const SendOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const find = await UserModel.findOne({ email });
  if (!find) {
    return res.status(400).json({
      message: "User not exist",
    });
  }
  OTP = Math.floor(1000 + Math.random() * 9000);
  ChangePasswordOtp = {
    email,
    expire: Date.now() + 1000 * 60 * 5,
    Sub: "Reset password",
    text: `your requested otp reset ,please do not share otp \n ${OTP}  \n otp is valid 5 min `,
  };
  SendMail(ChangePasswordOtp);

  return res.status(200).json({
    message: "OTP Sent",
  });
});

const CheckOtp = asyncHandler(async (req, res) => {
  const { check_otp } = req.body;

  if (ChangePasswordOtp.expire < Date.now()) {
    return res.status(403).json({
      message: "OTP Expire",
    });
  }

  if (check_otp !== OTP) {
    return res.status(400).json({
      message: "Invalid otp",
    });
  }

  return res.status(200).json({
    message: "verify",
    redirect: true,
  });
});

const newPassword = asyncHandler(async (req, res) => {
  const { password, email } = req.body;

  const find = await UserModel.findOne({ email });
  find.password = password;
  find.save();

  return res.status(200).json({
    message: "password Created successful",
  });
});

const CrateNewPassword = asyncHandler(async (req, res) => {
  const { oldpassword, newPassword } = req.body;

  const find = await UserModel.findById(req.user?._id);

  const result = await find.Checkpassword(oldpassword);
  if (!result) {
    return res.status(400).json({
      messages: "Old Password is Wrong",
    });
  }

  find.password = newPassword;
  find.save();

  return res.status(200).json({
    message: "New Password Created",
  });
});


const Profile = asyncHandler(async(req,res)=>{
  const file = req.file
  if(!file){
    return res.status(400).json({
      message:"Image is required"
    })
  }

  const oldFile = req?.user?.profile_image?.image_id;
  if (oldFile) {
    await deleteImage(oldFile);
  }

  const data = await ImageUpload(file)
  const update = await UserModel.findByIdAndUpdate(req.user?._id, { profile_image :data})
  return res.status(200).json({
    message:"Profile uploaded successful",
  })
})

export {
  createUser,
  loginUser,
  SendOtp,
  CheckOtp,
  newPassword,
  CrateNewPassword,
  Profile
};
