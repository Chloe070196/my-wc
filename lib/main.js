const {
  getFileContentStr,
  getWordCount,
  getLineCount,
  getFileSizeInBytes,
} = require("./utils.js");
const logResults = require("./logger.js")

function wc(fileName, options) {
  // access file and file content
  const fileContentStr = getFileContentStr(fileName);
  // check input validity
  if (!fileName) {
    throw Error("file not found");
  }
  if (!fileContentStr) {
    throw Error("empty file");
  }
  // get the data
  const data = {};
  data.lineCount = getLineCount(fileContentStr);
  data.wordCount = getWordCount(fileContentStr);
  data.fileSizeInBytes = getFileSizeInBytes(fileName);
  // print to the console
  logResults(data, options, fileName);
}

module.exports = wc;
