function logResults(data, options, fileName) {
  // execute specific command if option included
  const { lineCount, wordCount, fileSizeInBytes } = data;
  if (options.lines) {
    console.log(lineCount, fileName);
    return;
  }
  if (options.words) {
    console.log(wordCount, fileName);
    return;
  }
  if (options.bytes) {
    console.log(fileSizeInBytes, fileName);
    return;
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

module.exports = logResults