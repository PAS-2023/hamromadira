const express = require("express");
const app = express();
const cors = require("cors");
const { DB_URL } = require("./utils/config");
const mongoose = require("mongoose");
const { info } = require("./utils/logger");
const { requestLogger, unknownEndpoint } = require("./utils/middleware");

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(DB_URL)
  .then(() => {
    info("DB connected Successfully");
  })
  .catch((err) => info(err));

app.get("/", (req, res) => {
  res.send("Hamro Madira app");
});

app.use(unknownEndpoint);

app.use(requestLogger);
module.exports = app;
