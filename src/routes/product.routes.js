import { Router } from "express";
import { AdminGetProduct, CreateProduct, DeleteProduct, GetProduct, UpdateProduct } from "../controller/Product.controller.js";
import { ProductValidate } from "../helper/index.helper.js";
import { AdminAuthontication } from "../middleware/Admin.middleware.js";

const router = Router()

router.route('/create').post(AdminAuthontication,ProductValidate,CreateProduct)
router.route("/get?").get(GetProduct)
router.route("/admin-get").get(AdminAuthontication,AdminGetProduct)
router.route("/delete/:id").delete(AdminAuthontication,DeleteProduct)
router.route("/update/:id").put(AdminAuthontication,ProductValidate,UpdateProduct)




export default router
