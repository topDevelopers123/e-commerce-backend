import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { CreateOrder, UpdateOrder } from "../controller/order.controller.js";
import { Ordervalidation } from "../helper/index.helper.js";

const router = Router();

router.route("/create").post(Authontication, Ordervalidation, CreateOrder);
router.route("/update/:id").put(Authontication, UpdateOrder);

export default router;
