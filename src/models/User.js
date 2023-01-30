const userModelLogin = (sequelize, DataTypes) => {
    const UserModel = sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true, 
         autoIncrement: true,
         },

      email: DataTypes.STRING,


      displayName: DataTypes.STRING,
   

      password: DataTypes.STRING,
    
     image: DataTypes.STRING,

     
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true
    });
  
    UserModel.associate = ({ BlogPost }) =>{
        UserModel.hasMany(BlogPost, {
            foreignKey: 'user_id', as: 'blog_posts'
        } )
    }
    
  
     return UserModel;
  };

module.exports = userModelLogin;