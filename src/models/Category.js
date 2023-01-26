module.exports = (sequelize, DataTypes) => {
    const CategoryModel = sequelize.define('Category', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true, 
         autoIncrement: true,
         },

      name: DataTypes.STRING,
     
    },
    {
      timestamps: false,
      tableName: 'categories',
    });
  
    //  UserModel.associate = (models) => {
    //    UserModel.hasOne(models.,
    //     { foreignKey: 'user_id', as: 'addresses' });
    //  };
  
     return CategoryModel;
  };