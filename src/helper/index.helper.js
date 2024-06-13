

import { UserSchema } from "../validation/Validations.Schema.js";
import { validate } from "./authValidation.js";

export const RegisterValidate = validate(UserSchema)