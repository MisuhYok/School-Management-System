'use strict';
module.exports = (sequelize, DataTypes) => {
  class Student extends sequelize.Sequelize.Model {}

  Student.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    ParentId: DataTypes.INTEGER
  }, {
    sequelize
  });

  Student.associate = function(models) {
    Student.belongsTo(models.Parent);
    Student.hasMany(models.Mark);
    Student.hasMany(models.Attendance);
    Student.hasMany(models.ClassroomStudent);
  };
  return Student;
};