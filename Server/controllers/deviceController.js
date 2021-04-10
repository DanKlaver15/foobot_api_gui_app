const Device = require("../models/device");
const crudController = require("../utils/crud");

const createOne = async (req, res) => {
  try {
    const device = await Device.create({ ...req.body });

    if (!device)
      return res.status(401).send({ error: "Failed to add device." });

    const updatedDevice = await Device.findById(device._id)
      .populate("userId")
      .lean()
      .exec();

    return res.status(201).send(updatedDevice);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: `${err}` });
  }
};

const updateOne = async (req, res) => {
  try {
    const device = await Device.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("userId");

    if (!device)
      return res.status(404).json({
        error: `Failed to update device.`,
      });
    res.status(200).send(device);
  } catch (err) {
    return res.status(500).send({ error: `${err}` });
  }
};

module.exports = { ...crudController(Device), createOne, updateOne };
