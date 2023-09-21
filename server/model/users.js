const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String },
});
userSchema.set("timestamps", true);

const Users = mongoose.model("user", userSchema);

module.exports = Users;
