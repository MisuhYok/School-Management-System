'use strict';
module.exports = (sequelize, DataTypes) => {
  class Attendance extends sequelize.Sequelize.Model {}

  Attendance.init({
    attendanceDate: DataTypes.DATE,
    status: DataTypes.ENUM(['Present', 'Permit', 'Sick', 'Absent']),
    remarks: DataTypes.STRING,
    StudentId: DataTypes.INTEGER
  }, {
    sequelize
  });

  Attendance.associate = function(models) {
    Attendance.belongsTo(models.Student);
  };

  return Attendance;
};