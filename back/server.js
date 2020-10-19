const express = require("express");
const serveIndex = require("serve-index");

const app = express();
const www = ".";
const port = 3000;

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
