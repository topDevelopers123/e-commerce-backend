import { Router } from "express";
import { createUser, loginUser } from "../controller/user.controller.js";
import { Authontication } from "../middleware/Auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import fs from "fs"

const router = Router() 

router.route("/create").post(createUser)
router.route("/login").post(loginUser)
router.route("/upload").post(upload.single("image"))


export default router