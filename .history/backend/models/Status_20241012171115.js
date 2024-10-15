const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  statusOperacional: { type: String, required: true },
});

module.exports = mongoose.model('Status', statusSchema);
