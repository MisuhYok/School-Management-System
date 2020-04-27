'use strict';
module.exports = (sequelize, DataTypes) => {
  class Course extends sequelize.Sequelize.Model {}

  Course.init('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    GradeId: DataTypes.INTEGER
  }, {
    sequelize
  });

  Course.associate = function(models) {
    Course.belongsTo(models.Grade);
    Course.hasMany(models.Mark);
  };
  
  return Course;
};