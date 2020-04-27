'use strict';
module.exports = (sequelize, DataTypes) => {
  class Grade extends sequelize.Sequelize.Model {}

  Grade.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize
  });

  Grade.associate = function(models) {
    Grade.hasMany(models.Course);
    Grade.hasMany(models.Classroom);
  };
  return Grade;
};