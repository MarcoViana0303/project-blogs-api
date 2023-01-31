const { postCategory } = require('../services/category.service');

const categoryPost = async (req, res) => {
    const { type, message } = await postCategory(req.body);
    if (type !== 201) {
        return res.status(type).json({ message });
    }
    return res.status(type).json(message);
};

module.exports = {
    categoryPost,
};