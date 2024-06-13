import {Router} from "express"


// local imports 
import UserRouter from "./user.routes.js"
import ProductRoutes from "./product.routes.js"

const router = Router()

router.use("/user",UserRouter)
router.use("/product",ProductRoutes)


export default router