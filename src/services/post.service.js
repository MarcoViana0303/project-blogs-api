const { BlogPost, User, Category } = require('../models');

const getAllPostsCategories = async () => {
    const resultPosts = await BlogPost.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
        },
      ],
    });
    if (!resultPosts) {
      return { type: 500, message: 'Ocorreu um erro' };
    }
    return { type: 200, message: resultPosts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  if (!post) {
    return { type: 404, message: 'Post does not exist' };
  }
  return { type: 200, message: post };
};

module.exports = {
    getAllPostsCategories,
    getPostById,
};