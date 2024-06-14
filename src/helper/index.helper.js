import {
  ProductSchema,
  addressCheck,
  SubInnerCategory,
  UserSchema,
  SubCategory,
} from "../validation/Validations.Schema.js";
import { validate } from "./validate.js";

export const RegisterValidate = validate(UserSchema);

export const ProductValidate = validate(ProductSchema);

export const Sub_category = validate(SubCategory);

export const Sub_Inner_category = validate(SubInnerCategory);

export const userAddress = validate(addressCheck);
