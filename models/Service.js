
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  location: String,
  rating: Number,
});

module.exports = mongoose.model('Service', ServiceSchema);
