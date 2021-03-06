const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const users = require("./routes/users");
const folders = require("./routes/folders");
const auth = require("./routes/auth");

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/users", users);
app.use("/api/folders", folders);
app.use("/auth", auth);
app.use(express.static("data"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
