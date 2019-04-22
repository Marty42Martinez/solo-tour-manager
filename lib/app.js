const mongoose = require('mongoose');
const express = require('express');
const mongoConnection = require('./middleware/mongo-connection');

const app = express();


app.use(require('morgan')('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json());

//ROUTES
app.use('api/v1/tours', mongoConnection, require('./routes/tours'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
