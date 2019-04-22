const mongoose = require('mongoose');


const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  activities: {
    type: [String]
  },
  launchDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  stops: {
    type: [mongoose.Types.ObjectId]
  }
});

module.exports = mongoose.model('Tour', tourSchema);

