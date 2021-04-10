const express = require("express");
const router = express.Router();
const Joi = require("joi");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
const { validateUser } = require("../middlewares/validate");
const avatar = require("../middlewares/avatar");

router.route("/").post(validateUser, userController.createOne);
router
  .route("/:id")
  .get(auth, userController.getOne)
  .put(auth, userController.updateOne)
  .delete(auth, userController.removeOne);

router.get("/avatar/:filename", (req, res) => {
  res.type("png");
  return res.sendFile(avatar.filepath(req.params.filename));
});

router
  .route("/:id/avatar")
  .post([auth, avatar.upload, avatar.handleAvatar()], userController.addAvatar)
  .delete(auth, userController.removeAvatar);

module.exports = router;
