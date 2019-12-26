const fs = require("fs");

const path = "../src/generated/grid.js";
function main() {
  console.log("main?");
  fs.writeFileSync(path, "Test");
}

main();
