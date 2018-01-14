const fs = require('fs-extra');

module.exports = {
  readFile
};

/**
 * Reads the TXT log file located at the given file path.
 * @param filePath path to the log file.
 */
function readFile(filePath) {
  const file = fs.readFileSync(filePath, {encoding: 'utf8'});
  return file;
}