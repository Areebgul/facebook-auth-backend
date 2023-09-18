const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  facebookId: String,
  displayName: String,
  email: String,
  longLivedToken: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
