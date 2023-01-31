const { schemasUser, schemasCategoryName } = require('./schema');

const validateUser = (body) => {
  const { error } = schemasUser.validate(body);
  if (error) {
    return error.message;
  }
  return null;
};

const validateCategory = (body) => {
  const { error } = schemasCategoryName.validate(body);
  if (error) {
    return error.message;
  }
  return null;
};

module.exports = {
  validateUser,
  validateCategory,
};