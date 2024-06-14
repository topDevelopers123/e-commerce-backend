import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import {
  DeleteSubCategory,
  UpdateSubCategory,
  createSubCategory,
  getSubCategory,
} from "../controller/sub_category.controller.js";
import {  Sub_category } from "../helper/index.helper.js";

const router = Router();

router.route("/create-subcategory").post(Authontication,Sub_category, createSubCategory);
router.route("/get-subcategory").get(Authontication, getSubCategory);

router
  .route("/delete-subcategory/:id")
  .delete(Authontication, DeleteSubCategory);

router.route("/update-subcategory/:id").put(Authontication, UpdateSubCategory);
