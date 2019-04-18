const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Api first page.',
}));

module.exports = app;