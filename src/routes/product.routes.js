import { Router } from "express";
import { CreateProduct } from "../controller/Product.controller.js";
import { Authontication } from "../middleware/Auth.middleware.js";

const router = Router()

router.route('/Create').post(Authontication,CreateProduct)


export default router
