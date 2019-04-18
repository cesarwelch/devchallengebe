const expensesController = require('../controllers').expenses;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Expenses API!',
  }));

  app.post('/api/expenses', expensesController.create);
  app.get('/api/expenses', expensesController.list);
  app.post('/api/expenses/bydate', expensesController.listByDate);
};
