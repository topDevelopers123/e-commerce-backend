import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { Createinnercategory, DeleteInnerCategory, GetInnerCategory, UpdateInnerCategory } from "../controller/Sub_inner_category.js";


const router = Router()

router.route("/create").post(Authontication,Createinnercategory)
router.route("/get-admin").get(Authontication,GetInnerCategory)
router.route("/delete/:id").delete(Authontication,DeleteInnerCategory)
router.route("/create").put(Authontication,UpdateInnerCategory)



export default router