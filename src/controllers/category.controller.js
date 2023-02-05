const { postCategory, getAllCategories } = require('../services/category.service');

const categoryPost = async (req, res) => {
    const { type, message } = await postCategory(req.body);
    if (type !== 201) {
        return res.status(type).json({ message });
    }
    return res.status(type).json(message);
};

const allCategories = async (_req, res) => {
    try {
        const categories = await getAllCategories();
        return res.status(200).json(categories);
      } catch (e) {
        res.status(500).json({ message: 'Ocorreu um erro' });
      }
};

module.exports = {
    categoryPost,
    allCategories,
};