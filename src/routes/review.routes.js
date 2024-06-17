import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { CreateReview, DeleteReview } from "../controller/Review.controller.js";

const router = Router();

router.route("/add").post(Authontication, CreateReview);
router.route("/delete/:id").delete(Authontication, DeleteReview);

export default router;
