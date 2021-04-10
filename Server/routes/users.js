const express = require("express");
const router = express.Router();
const Joi = require("joi");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
const { validateUser } = require("../middlewares/validate");

router.route("/").post(validateUser, userController.createOne);
