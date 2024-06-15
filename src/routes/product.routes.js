import { Router } from "express";
import { AdminGetProduct, CreateProduct, DeleteProduct, GetProduct, UpdateProduct } from "../controller/Product.controller.js";
import { Authontication } from "../middleware/Auth.middleware.js";
import { ProductValidate } from "../helper/index.helper.js";

const router = Router()

router.route('/create').post(Authontication,ProductValidate,CreateProduct)
router.route("/get").get(GetProduct)
router.route("/admin-get").get(Authontication,AdminGetProduct)
router.route("/delete/:id").delete(Authontication,DeleteProduct)
router.route("/update/:id").put(Authontication,ProductValidate,UpdateProduct)




export default router
