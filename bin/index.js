const fs = require("fs");

const path = "../src/generated/grid.js";

module.exports = function generateCode({
  rows,
  columns,
  alignItems,
  justifyContent,
  flexDirection
}) {
  console.error(rows, "rows in generate code");
  fs.writeFileSync(path, rows);
};
