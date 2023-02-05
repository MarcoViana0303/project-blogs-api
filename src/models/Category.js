module.exports = (sequelize, DataTypes) => {
    const CategoryModel = sequelize.define('Category', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true, 
         autoIncrement: true,
         allowNull: false,
         },

      name: DataTypes.STRING,
     
    },
    {
      timestamps: false,
      tableName: 'categories',
      underscored: true
    });
  
    //  UserModel.associate = (models) => {
    //    UserModel.hasOne(models.,
    //     { foreignKey: 'user_id', as: 'addresses' });
    //  };
  
     return CategoryModel;
  };