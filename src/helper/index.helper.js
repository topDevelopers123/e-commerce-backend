

import { ProductSchema, UserSchema } from "../validation/Validations.Schema.js";
import { validate } from "./validate.js";

export const RegisterValidate = validate(UserSchema)

export const RegisterProduct = validate(ProductSchema)