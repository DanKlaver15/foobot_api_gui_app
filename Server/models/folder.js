const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "default",
  },
  parentId: { type: mongoose.Schema.Types.ObjectId, default: null },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const Folder = mongoose.model("Folder", folderSchema);

module.exports = { folderSchema, Folder };
