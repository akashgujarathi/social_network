const mangooes = require('mongoose');

const UserSchema = new mangooes.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongooes.module('user', UserSchema);
