import {
  ProductSchema,
  addressCheck,
  SubInnerCategory,
  UserSchema,
  SubCategory,
  ProductDetail,
  OrderDetail,
} from "../validation/Validations.Schema.js";
import { validate } from "./validate.js";

export const RegisterValidate = validate(UserSchema);

export const ProductValidate = validate(ProductSchema);

export const Sub_category = validate(SubCategory);

export const Sub_Inner_category = validate(SubInnerCategory);

export const userAddress = validate(addressCheck);

export const ProductDetailvalidation = validate(ProductDetail);

export const Ordervalidation = validate(OrderDetail);
