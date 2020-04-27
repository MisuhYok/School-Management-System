'use strict';
module.exports = (sequelize, DataTypes) => {
  class Exam extends sequelize.Sequelize.Model {}

  Exam.init({
    name: DataTypes.STRING,
    examDate: DataTypes.DATE
  }, {
    sequelize
  });

  Exam.associate = function(models) {
    Exam.hasMany(models.Mark)
  };
  return Exam;
};