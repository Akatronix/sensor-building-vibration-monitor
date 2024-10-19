const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
const moment = require("moment");

async function Logger(file, data) {
  const DateTime = moment().format("YYYY-MM-DD\t\tHH:mm:ss");
  const { x, y, z, id } = data;
  const filename = file.split(".")[0];
  const message = `${filename}\t\tx:${x}  y:${y}  z:${z}\t\t${DateTime}\t\t${id}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromise.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromise.appendFile(
      path.join(__dirname, "..", "logs", file),
      message
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = Logger;
