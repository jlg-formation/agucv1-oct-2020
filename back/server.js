console.log("starting server");

const express = require("express");
const serveIndex = require("serve-index");

const app = express();

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(3000, () => {
  console.log("server started on port 3000");
});
