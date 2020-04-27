'use strict';
module.exports = (sequelize, DataTypes) => {
  class Teacher extends sequelize.Sequelize.Model {}

  Teacher.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize
  });
  
  Teacher.associate = function(models) {
    Teacher.hasMany(models.Classroom);
  };

  return Teacher;
};