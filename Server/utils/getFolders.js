const { Folder } = require("../models/folder");

const getFolders = async (ids) => {
  try {
    const folderList = await Folder.find({ userId: { $in: ids } })
      .populate("userId")
      .lean()
      .exec();

    if (!folderList) return [];

    return folderList;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getFolders,
};
