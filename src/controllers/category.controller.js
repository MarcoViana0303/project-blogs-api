const { postCategory, getAllCategories } = require('../services/category.service');

const categoryPost = async (req, res) => {
    const { type, message } = await postCategory(req.body);
    if (type !== 201) {
        return res.status(type).json({ message });
    }
    return res.status(type).json(message);
};

const allCategories = async (req, res) => {
    const result = await getAllCategories();
    return res.status(200).json(result);
};

module.exports = {
    categoryPost,
    allCategories,
};