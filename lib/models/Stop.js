const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
  location: {
    latitude: {
      type: Number,
      required: true,
      min: -90,
      max: 90
    },
    longitude: {
      type: Number,
      required: true,
      min: -180,
      max: 180
    }
  },
  weather: {
    description: {
      type: String
    },
    tempHigh: {
      type: Number
    },
    tempLow: {
      type: Number
    }
  },
  attendance: {
    type: Number,
    required: true,
    min: 1
  }

});

