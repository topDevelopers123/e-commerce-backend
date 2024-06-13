import vine from "@vinejs/vine";

import { customError } from "./index.validation.js";


vine.errorReporter = () => new customError()



export const UserSchema = vine.object({
    name:vine.string().minLength(2).maxLength(30),
    email:vine.string().email(),
    phone:vine.string().minLength(10).maxLength(12),
    password:vine.string().minLength(6).maxLength(16)
})