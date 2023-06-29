const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  api_key: {
    type: String
  },

  host: {
    type: String
  },

  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },

});


const User = mongoose.model("User", userSchema);

module.exports = User;
