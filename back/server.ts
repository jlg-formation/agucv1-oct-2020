import express from "express";
import serveIndex from "serve-index";

const app = express();
const www = "../front/dist/front";
const port = 3000;

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => console.log(`server started on port ${port}`));
