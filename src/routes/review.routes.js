import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { CreateProduct, DeleteProduct } from "../controller/Review.controller.js";


const router = Router()


router.route("/create").post(Authontication,CreateProduct)
router.route("/delete/:id").put(Authontication,DeleteProduct)


export default router