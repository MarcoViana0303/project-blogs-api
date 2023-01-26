module.exports = (sequelize, DataTypes) => {
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
      underscored: true,
    });
  
    //  UserModel.associate = (models) => {
    //    UserModel.hasOne(models.,
    //     { foreignKey: 'user_id', as: 'addresses' });
    //  };
  
     return UserModel;
  };