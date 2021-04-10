const express = require("express");
const router = express.Router();
const deviceController = require("../deviceController");
const auth = require("../middlewares/auth");

router
  .route("/")
  .get(auth, deviceController.getAll)
  .post(auth, deviceController.createOne);
router
  .route("/:id")
  .get(auth, deviceController.getOne)
  .put(auth, deviceController.updateOne)
  .delete(auth, deviceController.removeOne);

module.exports = router;
