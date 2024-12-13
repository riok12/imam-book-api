const Joi = require('joi');

const userSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    published_date: Joi.date().required(),
    isbn: Joi.string().required(),
    pages: Joi.number().integer().allow(null)
});

module.exports = userSchema;