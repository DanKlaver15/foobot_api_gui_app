const { Folder } = require("../models/folder");
const { getFolders } = require("../utils/getFolders");
const crudController = require("../utils/crud");

const getFolderList = async (req, res) => {
  const { id } = req.params;
  try {
    let folders = await getFolders(id);

    folders = folders.map((folder) => folder._id);

    const folderList = await Folder.find()
      .or([{ userId: id }, { userId: { $in: folders } }])
      .populate("userId")
      .lean()
      .exec();

    if (!folderList)
      return res.status(401).send({ error: "Error: User feed not found" });

    return res.status(201).send(folderList);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: `${err}` });
  }
};

module.exports = { ...crudController(Folder), getFolderList };
