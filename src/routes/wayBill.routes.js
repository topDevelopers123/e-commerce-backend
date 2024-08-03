import { Router } from "express";
import { CancelPickup, createWaybill } from "../controller/waybill.controller.js";
import { Authontication } from "../middleware/Auth.middleware.js";

const router = Router()


router.route("/create").post(Authontication, createWaybill)
router.route("/cancel").post(Authontication, CancelPickup)


export default router