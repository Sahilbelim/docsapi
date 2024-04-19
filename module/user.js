import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  mobileNumber: {
    type: String,
    minimum: 1000000000,
    maximum: 9999999999,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
});

const UserSchema = mongoose.model("user", User);

module.exports = UserSchema;