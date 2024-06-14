import { asyncHandler } from "../utils/asyncHandler.js";
import { categoryModel } from "../model/category.model.js";
import { subCategoryModel } from "../model/sub_category.model.js";
import { subInnerCategoryModel } from "../model/sub_inner_category.model.js";



const CreateCategory = asyncHandler(async(req,res)=>{
    const data = req.body

    if(!data.cateory_name){
        return res.status(400).json({
            message:"Category name is required"
        })
    }

    const find = await categoryModel.find(data)
    if(find){
        return res.status(408).json({
            message:"Category Already exist"
        })
    }

    const create = await categoryModel.create(data)
    return res.status(200).json({
        message:"Category Created successful"
    })
})


const GetCategory = asyncHandler(async(req,res)=>{
    const data = await categoryModel.find({})
    return res.status(200).json({
        message:"data",
        data
    })
})


const DeleteCategory = asyncHandler(async(req,res)=>{
    const {id}  = req.params

    const find = await categoryModel.findById(id)

    if(!find){
        return res.status(404).json({
            messages:"Category is not exist"
        })
    }
    await subInnerCategoryModel.deleteMany({parent_category1:id})
    await subCategoryModel.deleteMany({parent_category:id})
    await categoryModel.findByIdAndDelete(id)

    return res.status(200).json({
        message:"Category delete successful"
    })
})

const UpdateCategory = asyncHandler(async(req,res)=>{
    const data = req.body
    const {id} = req.params

    const find = await categoryModel.findById(id)
    if(!find){
        return res.status(404).json({
            message:"Category is not exist"
        })
    }
    await categoryModel.findByIdAndUpdate(id,data) 
    return res.status(200).json({
        message:"Category updated successful"
    })
})


export {
    CreateCategory,
    GetCategory,
    DeleteCategory,
    UpdateCategory
}