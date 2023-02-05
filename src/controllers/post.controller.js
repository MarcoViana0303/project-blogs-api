const { getAllPostsCategories, getPostById } = require('../services/post.service');

const getAllPosts = async (_req, res) => {
    const { type, message } = await getAllPostsCategories();
    res.status(type).json(message);
};

const getById = async (req, res) => {
 const { id } = req.params;
 const { type, message } = await getPostById(id);
 if (type !== 200) {
    return res.status(type).json({ message });
 }
    return res.status(type).json(message);
};

module.exports = {
    getAllPosts,
    getById,
};