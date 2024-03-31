const fs = require("fs");

function getFileName() {
  return process.argv[2];
}
function getFileContentStr(fileName) {
  if (fileName) {
    return fs.readFileSync(fileName, "utf8");
  }
}
function getNestedWordArr(file) {
  const arr = file.split(/\r/);
  // ensures that /n and empty strings are not counted as words
  return arr.map((chunk) =>
    chunk.split(" ").filter((word) => word.length !== 0 && word !== "\n")
  );
}
function getWordCount(file) {
  const nestedWordArr = getNestedWordArr(file);
  let count = 0;
  nestedWordArr.forEach((subArr) => (count += subArr.length));
  return count;
}
function getLineCount(file) {
  return file.split(/\r?\n/).length;
}


module.exports = {
  getFileName,
  getFileContentStr,
  getNestedWordArr,
  getWordCount,
  getLineCount,
  getFileSizeInBytes
};
