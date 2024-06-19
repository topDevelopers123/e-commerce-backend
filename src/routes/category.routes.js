import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import {
  CreateCategory,
  DeleteCategory,
  GetCategory,
  GetCategorys,
  UpdateCategory,
} from "../controller/Category.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router
  .route("/create")
  .post(Authontication, upload.single("image"), CreateCategory);
router.route("/get-admin").get(Authontication, GetCategory);
router.route("/delete/:id").delete(Authontication, DeleteCategory);
router
  .route("/update/:id")
  .put(Authontication, upload.single("image"), UpdateCategory);
router.route("/category").get(GetCategorys);

export default router;
