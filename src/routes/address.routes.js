import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { addAddress } from "../controller/address.controller.js";
import { userAddress } from "../helper/index.helper.js";

const router = Router();

router.route("/add").post(Authontication, userAddress, addAddress);

export default router;
