import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { CreateReview, DeleteReview } from "../controller/Review.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/add").post(Authontication,upload.array("image"), CreateReview);
router.route("/delete/:id").delete(Authontication, DeleteReview);

export default router;
