const User = require("../models/user");
const query = require("../utils/query");
const crudController = require("../utils/crud");

const createOne = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !password || !firstName || !lastName)
    return res.status(400).send({ error: "All fields are required" });

  try {
    const user = await query.findOne(User, { email });

    if (user) return res.status(400).send({ error: "Email already in use" });

    const newUser = await query.createOne(User, req.body);

    if (!newUser)
      return res.status(400).send({ error: "Failed to create new user" });

    const token = newUser.generateAuthToken();

    return res.status(201).send({ user: newUser, token });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
