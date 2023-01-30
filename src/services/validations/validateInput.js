const { schemas } = require('./schema');

const validateUser = (body) => {
  const { error } = schemas.validate(body);
  if (error) {
    return error.message;
  }
  return null;
};

module.exports = {
  validateUser,
};