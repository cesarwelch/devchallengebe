'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    expense: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
  };
  return Expense;
};