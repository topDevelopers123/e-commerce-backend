import { ProductModel } from "../model/products.model.js"; 
import { asyncHandler } from "../utils/asyncHandler.js";



const  CreateProduct = asyncHandler(async(req,res)=>{
    const data = req.body
    
    const Create = await ProductModel.create(data)

    return res.status(201).json({
        message:"Product Created Successful"
    })
})

export {CreateProduct}