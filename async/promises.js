const fs = require("fs");

const appendFilePromise = (filename, content) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(filename, content, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

appendFilePromise("toto.txt", "toto\n")
  .then(() => {
    return appendFilePromise("toto.txt", "toto\n");
  })
  .then(() => {
    return appendFilePromise("toto.txt", "toto\n");
  })
  .then(() => {
    return appendFilePromise("toto.txt", "toto\n");
  })
  .catch((err) => {
    console.log("err: ", err);
  });
