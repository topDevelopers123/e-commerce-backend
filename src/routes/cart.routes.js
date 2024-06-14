import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";


const router = Router();

router.route("/cart").post(Authontication);


export default router