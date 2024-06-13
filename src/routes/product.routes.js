import { Router } from "express";
import { CreateProduct } from "../controller/Product.controller.js";
import { Authontication } from "../middleware/Auth.middleware.js";
import { ProductValidate } from "../helper/index.helper.js";

const router = Router()

router.route('/create').post(Authontication,ProductValidate,CreateProduct)


export default router
