const fs = require("fs");

fs.appendFile("toto.txt", "toto\n", () => {
  fs.appendFile("toto.txt", "toto\n", () => {
    fs.appendFile("toto.txt", "toto\n", () => {
      fs.appendFile("toto.txt", "toto\n", () => {});
    });
  });
});
