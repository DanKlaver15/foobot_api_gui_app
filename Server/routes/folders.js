const express = require("express");
const router = express.Router();
const folderController = require("../controllers/folderController");
const auth = require("../middlewares/auth");

router
  .route("/")
  .get(auth, folderController.getAll)
  .post(auth, folderController.createOne);
router
  .route("/:id")
  .get(auth, folderController.getOne)
  .put(auth, folderController.updateOne)
  .delete(auth, folderController.removeOne);

module.exports = router;
