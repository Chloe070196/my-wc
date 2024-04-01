#!/usr/bin/env node

const {
  getFileName,
  getFileContentStr,
  getNestedWordArr,
  getWordCount,
  getLineCount,
  getFileSizeInBytes
} = require("./utils.js");

function wc() {
  // access file and file content
  const fileName = getFileName();
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
  // print to the console
  console.log(
    lineCount + " ",
    wordCount + " ",
    fileSizeInBytes + " ",
    fileName
  );
}

wc();

module.exports = {
  wc,
  getFileName,
  getFileContentStr,
  getLineCount,
  getWordCount,
  getNestedWordArr,
};
