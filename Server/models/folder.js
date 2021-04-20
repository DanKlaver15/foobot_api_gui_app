const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  parent: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  devices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Device" }],
  children: [{ type: mongoose.Schema.Types.ObjectId }],
});

const Folder = mongoose.model("Folder", folderSchema);

module.exports = { folderSchema, Folder };
