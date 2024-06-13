import { ProductModel } from "../model/products.model.js"; 
import { asyncHandler } from "../utils/asyncHandler.js";



const  CreateProduct = asyncHandler(async(req,res)=>{
    const data = req.body
    
    const Create = await ProductModel.create({...data,user_id:req.user?._id})

    return res.status(201).json({
        message:"Product Created Successful"
    })
})

const GetProduct = asyncHandler(async(_,res)=>{
    const data = ProductModel.find({})

    return res.status(200).json({
        message:"Data ",
        data
    })
})

export {CreateProduct,GetProduct}