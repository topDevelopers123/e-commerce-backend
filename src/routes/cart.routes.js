import { Router } from "express";
import { Authontication } from "../middleware/Auth.middleware.js";
import {
  AddToCart,
  RemoveProductFromCart,
  updateQuantity,
  RemoveAllProduct,
} from "../controller/cart.controller.js";

const router = Router();

router.route("/add-cart").post(Authontication, AddToCart);
router.route("/add-quantity/:id").put(Authontication, updateQuantity);
router.route("/remove-cart/:id").delete(Authontication, RemoveProductFromCart);
router.route("/remove-all").delete(Authontication, RemoveAllProduct);

export default router;
