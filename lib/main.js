const {
  checkInputValidity,
  getFileContentStr,
  getWordCount,
  getLineCount,
  getFileSizeInBytes,
} = require("./utils.js");
const logResults = require("./logger.js")

function processIndividualFile(fileName, options, totals) {
  // access file and file content
  const fileContentStr = getFileContentStr(fileName);
  // check input validity
  if(!checkInputValidity(fileName, fileContentStr)) {
    return
  }
  // get the data
  const data = {};
  data.lineCount = getLineCount(fileContentStr);
  totals.lineCount += data.lineCount
  data.wordCount = getWordCount(fileContentStr);
  totals.wordCount += data.wordCount

  data.fileSizeInBytes = getFileSizeInBytes(fileName);
  totals.fileSizeInBytes += data.fileSizeInBytes
  // print to the console
  logResults(data, options, fileName);
  return totals
}

function wc(fileNames, options) {
  let totals = {
    lineCount: 0,
    wordCount: 0,
    fileSizeInBytes: 0
  }
  // log individual lines of data for each file
  fileNames.forEach(fileName => {
    processIndividualFile(fileName, options, totals)
  }) 
  // log the total data
  if (fileNames.length > 1) {
    logResults(totals, options, "total")
  }
}

module.exports = wc;
