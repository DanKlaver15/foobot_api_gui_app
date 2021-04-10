const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  uuid: {
    type: String,
  },
  mac: {
    type: String,
  },
  name: {
    type: String,
  },
});

const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;
