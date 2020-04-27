'use strict';
module.exports = (sequelize, DataTypes) => {
  class Mark extends sequelize.Sequelize.Model {}

  Mark.init({
    ExamId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER,
    marks: DataTypes.INTEGER
  }, {
    sequelize
  });

  Mark.associate = function(models) {
    Mark.belongsTo(models.Exam);
    Mark.belongsTo(models.Student);
    Mark.belongsTo(models.Course);
  };
  
  return Mark;
};