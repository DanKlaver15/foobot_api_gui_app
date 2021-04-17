const mongoose = require("mongoose");
const Int32 = require("mongoose-int32");
const { deviceSchema } = require("./device");

const childSchema = new mongoose.Schema({
  id: {
    type: Int32,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  devices: [deviceSchema],
});

const parentSchema = new mongoose.Schema({
  id: {
    type: Int32,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  children: [childSchema],
});

const Folder = mongoose.model("Folder", parentSchema);

module.exports = { parentSchema, Folder };
