import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import {
  BuyNow,
  CreateOrder,
  GetAdmin,
  UpdateOrder,
} from "../controller/order.controller.js";
import { Ordervalidation } from "../helper/index.helper.js";

const router = Router();

router.route("/create").post(Authontication, CreateOrder);
router.route("/update/:id").put(Authontication, UpdateOrder);
router.route("/get-orders").get(Authontication, GetAdmin);
router.route("/buynow").post(Authontication, BuyNow);

export default router;
