import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi.string()
        .pattern(/\w{3,50}/)
        .required()
        .messages({
            "string.pattern.base": "you don't match to pattern",
            "any.required": "field is required",
        }),
    body: Joi.string().min(3).max(300).messages({
        "string.min": "password must be at least 3 characters",
        "string.max": "password must be no longer 300 characters",
    }),
    userId: Joi.number().min(0).max(121).messages({
        "number.min": "age must be at least 0",
    }),
})