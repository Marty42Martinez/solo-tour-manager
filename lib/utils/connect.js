const mongoose = require('mongoose');
const { parse } = require('url');

module.exports = (dbURI = process.env.MONGODB_URI) => {



  return mongoose.connect(dbURI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
  });
};

