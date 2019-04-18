const Expense = require('../models').Expense;

module.exports = {
  create(req, res) {
    return Expense
      .create({
        title: req.body.title,
      })
      .then(expense => res.status(201).send(expense))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
        return Expense.all().then(guests => res.status(200).send(guests)).catch(error => res.status(400).send(error));
    },
};