import express from "express";
import cors from "cors"

const app = express()


// use middleware

app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({limit:"10mb",extended:true}))
app.use(express.static("public"))
app.use(cors())


// local imports 
import routes from "./routes/index.routes.js"
import { deleteImage } from "./utils/ImageHandler.js";

app.use("/api/v1",routes)



export {app}