import {wishlistModel} from "../model/wishlist.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const CreateWishlist = asyncHandler(async(req,res)=>{
    const {product_id} = req.body

    if(!product_id){
        return res.status(400).json({
            message:"product is requierd"
        })
    }

    await wishlistModel.create({product_id,user_id:req.user?._id})

    return res.status(201).json({
        message:"Add Item in Wishlist"
    })

})


// const get