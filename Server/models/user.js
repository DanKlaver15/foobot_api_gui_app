const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const { deviceSchema } = require("./device");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    trim: true,
    unique: true,
  },
  password: { type: String, required: true, minlength: 3, trim: true },
  apiKey: { type: String, minlength: 301, trim: true },
  foobotUsername: { type: String, trim: true },
  email: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    lowercase: true,
    unique: true,
  },
  firstName: { type: String, required: true, minlength: 1, trim: true },
  lastName: { type: String, required: true, minlength: 1, trim: true },
  avatar: { type: String },
  darkMode: { type: Boolean, default: false },
  registered: { type: Date, default: Date.now },
  devices: [{ type: deviceSchema }],
});

userSchema.pre("save", async function preSave(next) {
  if (!this.isModified("password")) return next();

  try {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email },
    config.get("authsecret")
  );
};

userSchema.methods.checkPassword = async function checkPassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
