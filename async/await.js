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

(async () => {
  try {
    await appendFilePromise("toto.txt", "toto\n");
    await appendFilePromise("toto.txt", "toto\n");
    await appendFilePromise("toto.txt", "toto\n");
    await appendFilePromise("toto.txt", "toto\n");
  } catch (e) {
    console.log("e: ", e);
  }
})();
