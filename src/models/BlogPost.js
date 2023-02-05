module.exports = (sequelize, DataTypes) => {
    const BlogPostModel = sequelize.define('BlogPost', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true, 
         autoIncrement: true,
         },

       title: {
          type: DataTypes.STRING,
        },

     content: {
          type: DataTypes.STRING,
        },

      userId: { type: DataTypes.INTEGER },

      published: {
        type: DataTypes.DATE,
      },

      updated: {
        type: DataTypes.DATE,
      },
     
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'blog_posts',
      createdAt: 'published',
      updatedAt: 'updated',
    });
  
      BlogPostModel.associate = ({ User, Category }) => {
        BlogPostModel.belongsTo(User, {
            foreignKey: 'user_id',
             as: 'user'
        })
        
           BlogPostModel.hasMany(Category, {
             foreignKey: 'id',
             as: 'categories',
           })
     };
  
     return BlogPostModel;
  };

  
     
     
     
    
     
   
    
   
    