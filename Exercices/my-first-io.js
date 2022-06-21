const fs = require("fs");

const len = fs
  .readFileSync(process.argv[2], {
    encoding: "utf8",
    flag: "r",
  })
  .toString()
  .split("\n").length;

console.log(len - 1);
