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


const getWishlist = asyncHandler(async(req,res)=>{
    const data  = await wishlistModel.find({}).populate("product_detail_id").populate("product_id")
    return res.status(200).json({
        message:"data",
        data
    })
})

const deleteWishlist = asyncHandler(async(req,res)=>{
    const {id} = req.params
    const find = await wishlistModel.findById(id)

    if(!find){
        return res.status(400).json({
            message:"data is notv exist "
        })
    }

    await wishlistModel.findByIdAndDelete(id)

    return res.status(200).json({
        message:"item remove to wishlist"
    })
})


export {
    CreateWishlist,
    getWishlist,
    deleteWishlist
}