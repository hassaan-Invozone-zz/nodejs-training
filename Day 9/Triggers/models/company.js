'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //
    }
  }
  Company.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isInt:true
    }
  }, {
    hooks: {
      beforeValidate: (user, options) => {
        // console.log(user.dataValues,'before')
      },
      afterCreate: (user, options) => {
        // console.log(user.dataValues,'after')
        console.log('here')
      }
    },
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
