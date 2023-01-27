module.exports = (sequelize, DataTypes) => {
    const PostCategoryModel = sequelize.define('PostCategory', {
      postId: {
         type: DataTypes.INTEGER,
         primaryKey: true, 
         },

         categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            },

    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    });
  
    PostCategoryModel.associate = ({ Category, BlogPost }) => {
        BlogPost.belongsToMany(Category, {
            as: 'categories',
            through: PostCategoryModel,
            foreignKey: 'post_id',
            otherKey: 'id'
        })

        Category.belongsToMany(BlogPost, {
            as: 'posts',
            through: PostCategoryModel,
            foreignKey: 'category_id',
            otherKey: 'id'
        })

        

    
     };
  
     return PostCategoryModel;
  };