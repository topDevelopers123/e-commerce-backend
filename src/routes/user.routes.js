import { Router } from "express";
import { Query, createUser, loginUser } from "../controller/user.controller.js";
import { Authontication } from "../middleware/Auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import fs from "fs"
import { RegisterValidate } from "../helper/index.helper.js";

const router = Router() 

router.route("/create").post(RegisterValidate,createUser)
router.route("/login").post(loginUser)
// router.route("/upload?").post(Query)


export default router