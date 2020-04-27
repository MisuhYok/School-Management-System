'use strict';
module.exports = (sequelize, DataTypes) => {
  class Classroom extends sequelize.Sequelize.Model {}

  Classroom.init({
    year: DataTypes.INTEGER,
    GradeId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    sequelize
  });

  Classroom.associate = function(models) {
    Classroom.hasMany(models.ClassroomStudent);
    Classroom.belongsTo(models.Grade);
    Classroom.belongsTo(models.Teacher);
  };
  
  return Classroom;
};