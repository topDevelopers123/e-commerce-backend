import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { CreateWishlist, deleteWishlist, getWishlist } from "../controller/Wishlist.controller.js";

const router = Router()

router.route("/add").post(Authontication,CreateWishlist)
router.route("/get").get(Authontication,getWishlist)
router.route("/delete/:id").post(Authontication,deleteWishlist)


export default router