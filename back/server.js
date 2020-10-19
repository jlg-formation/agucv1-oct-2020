console.log("starting server");

const express = require("express");
const serveIndex = require("serve-index");

const app = express();

app.get("/titi", (req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/titi", (req, res, next) => {
  res.end("hello world");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
