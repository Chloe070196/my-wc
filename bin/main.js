const {
    getFileContentStr,
    getWordCount,
    getLineCount,
    getFileSizeInBytes
  } = require("./utils.js");
  
  function wc(fileName, options) {
    // access file and file content
    const fileContentStr = getFileContentStr(fileName);
    // get the data
    if (!fileName) {
      throw Error("file not found");
    }
    if (!fileContentStr) {
      throw Error("empty file");
    }
    const lineCount = getLineCount(fileContentStr);
    const wordCount = getWordCount(fileContentStr);
    const fileSizeInBytes = getFileSizeInBytes(fileName);
    
    // execute specific command if option included
    if (options.lines) {
        console.log(lineCount, fileName)
        return
    }
    if (options.words) {
        console.log(wordCount, fileName)
        return
    }
    if (options.bytes) {
        console.log(fileSizeInBytes, fileName)
        return
    }
    // otherwise, print all
    if (Object.keys(options).length === 0) {
        console.log(
          lineCount + " ",
          wordCount + " ",
          fileSizeInBytes + " ",
          fileName
        );
    }
  }

  module.exports = wc