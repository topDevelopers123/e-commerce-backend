import { Router } from "express";
import {
  CheckOtp,
  CrateNewPassword,
  GetOrder,
  Profile,
  SendOtp,
  createUser,
  getAllUsers,
  loginUser,
  newPassword,
} from "../controller/user.controller.js";
import { Authontication } from "../middleware/Auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import { RegisterValidate } from "../helper/index.helper.js";

const router = Router();

router.route("/create").post(RegisterValidate, createUser);
router.route("/login").post(loginUser);
router.route("/send-otp").post(SendOtp);
router.route("/verify-otp").post(CheckOtp);
router.route("/new-password").post(newPassword);
router.route("/password").post(Authontication, CrateNewPassword);
router.route("/profile").post(Authontication, upload.single("image"), Profile);
router.route("/get-order").get(Authontication, GetOrder);
router.route("/all-users").get(Authontication, getAllUsers);

export default router;
