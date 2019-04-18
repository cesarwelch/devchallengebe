const Expense = require('../models').Expense;
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  create(req, res) {
    return Expense
      .create({
        expense: req.body.expense,
        type: req.body.type,
        amount: req.body.amount,
      })
      .then(expense => res.status(201).send(expense))
      .catch(error => res.status(400).send(error));
  },
	list(req, res) {
	  return Expense
	    .findAll()
	    .then(todos => res.status(200).send(todos))
	    .catch(error => res.status(400).send(error));
	},
  listByDate(req, res) {
    console.log(req.body.startDate)
      return Expense.findAll({
            where: {
                createdAt: {
                    [Op.between]: [req.body.startDate, req.body.endDate]
                }
            }
        }).then(todos => res.status(200).send(todos))
          .catch(error => res.status(400).send(error));
  }
};