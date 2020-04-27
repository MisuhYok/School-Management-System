'use strict';
module.exports = (sequelize, DataTypes) => {
  class ClassroomStudent extends sequelize.Sequelize.Model {}

  ClassroomStudent.init({
    StudentId: DataTypes.INTEGER,
    ClassroomId: DataTypes.INTEGER
  }, {
    sequelize
  });

  ClassroomStudent.associate = function(models) {
    ClassroomStudent.belongsTo(models.Student);
    ClassroomStudent.belongsTo(models.Classroom);
  };
  
  return ClassroomStudent;
};