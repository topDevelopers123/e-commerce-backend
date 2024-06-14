import { Router } from "express";

// local imports
import UserRouter from "./user.routes.js";
import ProductRoutes from "./product.routes.js";
import CartRoute from "./cart.routes.js";
import CategoryRoute from "./category.routes.js";
import subCategory from "./subCategory.routes.js";
import SubinnerCategory from "./subInnercategory.routes.js";
import addressRoute from "./address.routes.js";

const router = Router();

router.use("/user", UserRouter);
router.use("/product", ProductRoutes);
router.use("/cart", CartRoute);
router.use("/category", CategoryRoute);
router.use("/sub-category", subCategory);
router.use("/sub-inner-category", SubinnerCategory);
router.use("/user-address", addressRoute);

export default router;
