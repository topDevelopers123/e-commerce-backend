import vine from "@vinejs/vine";

import { customError } from "./index.validation.js";

vine.errorReporter = () => new customError()

export const UserSchema = vine.object({
    name:vine.string().minLength(2).maxLength(30),
    email:vine.string().email(),
    phone:vine.string().minLength(10).maxLength(12),
    password:vine.string().minLength(6).maxLength(16)
})


export const ProductSchema = vine.object({
      title: vine.string().minLength(5).maxLength(25),
      description: vine.string(50),
      category: vine.string().maxLength(30),
      sub_category: vine.string().maxLength(30),
      sub_inner_category: vine.string().maxLength(30),
      stock: vine.number(),
      local_charges: vine.number(),
      zonal_charges: vine.number(),
      national_charges: vine.number(),
      local_deadline:  vine.number(),
      zonal_deadline: vine.number(),
      national_deadline:  vine.number()
})