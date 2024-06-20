import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import {
  AdminGetProductDetails,
  CreateProductDetails,
  DeleteProductDetails,
  UpdateProductDetails,
} from "../controller/productDetail.controller.js";
import { ProductDetailvalidation } from "../helper/index.helper.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router
  .route("/create")
  .post(
    Authontication,
    upload.array("image"),
    ProductDetailvalidation,
    CreateProductDetails
  );
router.route("/admin-get").get(Authontication, AdminGetProductDetails);
router.route("/delete/:id").delete(Authontication, DeleteProductDetails);
router
  .route("/update/:id")
  .put(
    Authontication,
    upload.array("image"),
    ProductDetailvalidation,
    UpdateProductDetails
  );
// router.route("")

export default router;
