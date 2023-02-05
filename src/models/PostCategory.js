module.exports = (sequelize, DataTypes) => {
    const PostCategoryModel = sequelize.define('PostCategory', {
      postId: {
         type: DataTypes.INTEGER,
         },

         categoryId: {
            type: DataTypes.INTEGER,
            },
    },
    {
      underscored: true,
      tableName: 'posts_categories',
      timestamps: false
    },
    );
  
    PostCategoryModel.associate = ({ Category, BlogPost }) => {
      BlogPost.belongsToMany(Category, {
        as: 'categoryId',
        foreignKey: 'postId',
        otherKey: 'categoryId',
        through: PostCategoryModel,
    });

        Category.belongsToMany(BlogPost, {
            as: 'postId',
            foreignKey: 'categoryId',
            otherKey: 'postId',
            through: PostCategoryModel,
        });
    
      };
     return PostCategoryModel;
   };