import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import {
  DeleteSubCategory,
  UpdateSubCategory,
  createSubCategory,
  getSubCategory,
} from "../controller/sub_category.controller.js";
import { Sub_category } from "../helper/index.helper.js";

const router = Router();

router.route("/create").post(Authontication, Sub_category, createSubCategory);
router.route("/get").get(Authontication, getSubCategory);
router.route("/delete/:id").delete(Authontication, DeleteSubCategory);
router
  .route("/update/:id")
  .put(Authontication, Sub_category, UpdateSubCategory);

export default router;
