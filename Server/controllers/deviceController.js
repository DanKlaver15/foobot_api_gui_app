const { Device } = require("../models/device");
const query = require("../utils/query");
const crudController = require("../utils/crud");

const updateOne = async (req, res) => {
  try {
    const device = await Device.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!device)
      return res.status(404).json({
        error: `Failed to update device.`,
      });
    res.status(200).send(device);
  } catch (err) {
    return res.status(500).send({ error: `${err}` });
  }
};

module.exports = { ...crudController(Device), updateOne };
