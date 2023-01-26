module.exports = (sequelize, DataTypes) => {
    const BlogPostModel = sequelize.define('BlogPost', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true, 
         autoIncrement: true,
         },

      title: DataTypes.STRING,

      content: DataTypes.STRING,

      userId: { type: DataTypes.INTEGER, foreignKey: true },

      published: DataTypes.DATE,

      updated: DataTypes.DATE,
     
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'categories',
    });
  
      BlogPostModel.associate = ({ User }) => {
        BlogPostModel.belongsTo(User, {
            foreignKey: 'user_id'
        })
     };
  
     return BlogPostModel;
  };