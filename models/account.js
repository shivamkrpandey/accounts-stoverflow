const mongoose = require('mongoose');

module.exports = mongoose.model('Account', new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String
}));
