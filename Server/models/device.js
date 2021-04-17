const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  mac: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const Device = mongoose.model("Device", deviceSchema);

module.exports = { deviceSchema, Device };
