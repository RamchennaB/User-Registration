const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  address: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  addresses: [addressSchema]  // One-to-many relationship
});

const User = mongoose.model('User', userSchema);

module.exports = User;
