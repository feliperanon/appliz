const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  statusOperacional: String
});

module.exports = mongoose.model('Status', statusSchema);
