'use strict';
module.exports = (sequelize, DataTypes) => {
  class Parent extends sequelize.Sequelize.Model {}

  Parent.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize
  });

  Parent.associate = function(models) {
    Parent.hasMany(models.Student);
  };
  
  return Parent;
};