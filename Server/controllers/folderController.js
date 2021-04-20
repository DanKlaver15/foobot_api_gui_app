const { Folder } = require("../models/folder");
const query = require("../utils/query");
const crudController = require("../utils/crud");

const createOne = async (req, res) => {
  try {
    const folder = await Folder.create({ ...req.body });

    if (!folder)
      return res.status(401).send({ error: "Failed to create folder." });

    const updatedFolder = await Folder.findById(folder._id)
      .populate("userId")
      .lean()
      .exec();

    return res.status(201).send(updatedFolder);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: `${err}` });
  }
};

const updateOne = async (req, res) => {
  try {
    const folder = await Folder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("userId");

    if (!folder)
      return res.status(404).json({
        error: `Failed to update folder.`,
      });
    res.status(200).send(folder);
  } catch (err) {
    return res.status(500).send({ error: `${err}` });
  }
};

module.exports = { ...crudController(Folder), createOne, updateOne };
