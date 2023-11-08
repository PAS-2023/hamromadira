const express = require("express");
const app = express();
const cors = require("cors");
const { requestLogger, unknownEndpoint } = require("./utils/middleware");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hamro Madira app");
});

app.use(unknownEndpoint);

app.use(requestLogger);
module.exports = app;
