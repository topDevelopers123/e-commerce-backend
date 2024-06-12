import {Router} from "express"


// local imports 
import UserRouter from "./user.routes.js"

const router = Router()

router.use("/user",UserRouter)


export default router