var fs = require("fs");
const path = require("node:path");

fs.readdir(process.argv[2], function (err, list) {
  console.log(
    list
      .filter((file) => path.extname(file) == "." + process.argv[3])
      .join("\n")
  );
});
