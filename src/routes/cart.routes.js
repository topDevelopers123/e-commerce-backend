import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import {
  AddToCart,
  RemoveProductFromCart,
  AddQuantity,
  RemoveAllProduct,
} from "../controller/cart.controller.js";

const router = Router();

router.route("/add-cart").post(Authontication, AddToCart);
router.route("/add-quantity").post(Authontication, AddQuantity);
router.route("/remove-cart").post(Authontication, RemoveProductFromCart);
router.route("/remove-All").post(Authontication, RemoveAllProduct);

export default router;
