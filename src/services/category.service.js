const { Category } = require('../models');
const { validateCategory } = require('./validations/validateInput');
// const JWT = require('../utils/JWT')

const postCategory = async ({ id, name }) => {
    const error = validateCategory(name);
    if (error) {
        return { type: 400, message: '"name" is required' };
    }

    const categoryName = await Category.create({ id, name });

    return { type: 201, message: categoryName };
};

module.exports = {
    postCategory,
};