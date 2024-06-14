import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { CreateCategory, DeleteCategory, GetCategory, UpdateCategory } from "../controller/Category.controller.js";


const router = Router()

router.route("/create").post(Authontication,CreateCategory)
router.route("/get-admin").get(Authontication,GetCategory)
router.route("/delete/:id").delete(Authontication,DeleteCategory)
router.route("/create").put(Authontication,UpdateCategory)



export default router