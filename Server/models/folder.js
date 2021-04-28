const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  key: { type: mongoose.Schema.Types.ObjectId },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  children: [{ type: Object }],
});

const Folder = mongoose.model("Folder", folderSchema);

module.exports = { folderSchema, Folder };
