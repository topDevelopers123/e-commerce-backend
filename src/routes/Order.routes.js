import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { CreateOrder, UpdateOrder } from "../controller/order.controller.js";

const router = Router()


router.route("/create").post(Authontication, CreateOrder)
router.route("/update").post(Authontication, UpdateOrder)


export default router