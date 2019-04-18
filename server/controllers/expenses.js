const Expense = require('../models').Expense;

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
};