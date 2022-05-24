'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
      User.belongsToMany(models.WorkingDay, {through: 'UsersWorkingDays', foreignKey: 'userId', as: 'days'})
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },{
    sequelize,
    modelName: 'User',
  });
  return User;
};
