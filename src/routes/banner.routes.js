import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import {
  DeleteBanner,
  createBanner,
  getAdminBanner,
  getBanner,
} from "../controller/Banner.controller.js";

const router = Router();

router
  .route("/create")
  .post(Authontication, upload.single("image"), createBanner);
router.route("/get").get(getBanner);
router.route("/get-admin").get(Authontication, getAdminBanner);
router.route("/delete/:id").delete(Authontication, DeleteBanner);

export default router;
