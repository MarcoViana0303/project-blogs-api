const joi = require('joi');

const schemasUser = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string(),
});

const schemasCategoryName = joi.string().required();

module.exports = {
  schemasUser,
  schemasCategoryName,
};