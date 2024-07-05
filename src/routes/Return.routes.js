import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import { Create, Getdata, Update } from "../controller/retrurn.cantroller.js";
import { AdminAuthontication } from "../middleware/Admin.middleware.js";

const router = Router()


router.route("/create").post(Authontication, Create)
router.route("/get-return-order").get(AdminAuthontication, Getdata)
router.route("/update-return/:id").patch(Authontication, Update)

export default router