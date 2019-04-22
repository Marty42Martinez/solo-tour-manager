const mongoose = require('mongoose');
const express = require('express');

const app = express();


app.use(require('morgan')('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json());

//ROUTES
app.use('api/v1/tours', require('./routes/tours'));


module.exports = app;
