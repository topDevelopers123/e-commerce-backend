import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { AdminGetProductDetails, CreateProductDetails, DeleteProductDetails, UpdateProductDetails } from "../controller/productDetail.controller.js";
import { ProductDetailvalidation } from "../helper/index.helper.js";

const router = Router()

router.route('/create').post(Authontication,ProductDetailvalidation,CreateProductDetails)
router.route("/admin-get").get(Authontication,AdminGetProductDetails)
router.route("/delete/:id").delete(Authontication,DeleteProductDetails)
router.route("/update/:id").put(Authontication,ProductDetailvalidation,UpdateProductDetails)


export default router
