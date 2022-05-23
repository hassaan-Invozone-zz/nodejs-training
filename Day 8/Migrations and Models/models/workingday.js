'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkingDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WorkingDay.belongsToMany(models.User, {through: 'UsersWorkingDays', foreignKey: 'workingDayId', as: 'employes'})
    }
  }
  WorkingDay.init({
    weekDay: {type:DataTypes.STRING,allowNull:false},
    workingDate: {type:DataTypes.DATE,allowNull: false},
    isWorking: {type:DataTypes.BOOLEAN,allowNull:false}
  }, {
    sequelize,
    modelName: 'WorkingDay',
  });
  return WorkingDay;
};
