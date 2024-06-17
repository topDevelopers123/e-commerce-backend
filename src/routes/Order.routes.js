import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware";
import { CreateOrder } from "../controller/order.controller";
import { UpdateProduct } from "../controller/Product.controller";

const router = Router()


router.route("/create").post(Authontication, CreateOrder)
router.route("/update").post(Authontication, UpdateProduct)


export default router