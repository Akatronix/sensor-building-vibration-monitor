const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
const moment = require("moment");
// console.log(path.join(__dirname, ".."));
async function Logger(file, data) {
  const DateTime = moment().format("YYYY-MM-DD\t\tHH:mm:ss");
  const { x, y, z, id, name } = data;
  const message = `Name: ${name}\t\tData x:${x}  y:${y}  z:${z}\t\t Date: ${DateTime}\t\t ID: ${id}\n`;
  const success = { found: false, created: false };

  try {
    await fsPromise.appendFile(
      path.join(__dirname, "..", "holder", file),
      message
    );
    success.created = false;
    success.found = true;
  } catch (error) {
    console.log(error);
  }

  return success;
}

module.exports = Logger;
