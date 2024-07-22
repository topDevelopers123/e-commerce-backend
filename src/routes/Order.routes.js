import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import {
  BuyNow,
  CreateOrder,
  GetAdmin,
  UpdateOrder,
} from "../controller/order.controller.js";
import {
  createInvoice,
  getReceipt,
  MakePayement,
  RefundPayement,
} from "../controller/payement.controller.js";
import { AdminAuthontication } from "../middleware/Admin.middleware.js";

const router = Router();

router.route("/create").post(Authontication, CreateOrder);
router.route("/update/:id").put(Authontication, UpdateOrder);
router.route("/get-orders?").get(AdminAuthontication, GetAdmin);
router.route("/buynow").post(Authontication, BuyNow);
router.route("/payement").post(MakePayement);
router.route("/refund").post(RefundPayement);
router.route("/getReceipt").post(getReceipt);
router.route("/Invoice").post(createInvoice);

export default router;
