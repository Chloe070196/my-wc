const {
  getFileContentStr,
  getLineCount,
  getWordCount,
  getNestedWordArr,
} = require("../src/utils");
// const testFileStr = fs.readFileSync("pg132.txt", "utf8");

describe("wc: ", () => {
  let file 
  it("getFileContentStr returns the file contents as a string", () => {
    const result = getFileContentStr("pg132.txt");
    expect(result).not.toBeUndefined();
    expect(typeof result).toEqual("string");
    expect(result.length).toEqual(339294);
  });

  beforeEach(() => {
    file = getFileContentStr("pg132.txt");
  })
  
  it("getLineCount returns the number of lines", () => {
    const result = getLineCount(file);
    expect(result).not.toBeUndefined();
    expect(typeof result).toEqual("number");
    expect(result).toEqual(7147);
  });
  it("getWordCount returns the number of words", () => {
    const result = getWordCount(file);
    expect(result).not.toBeUndefined();
    expect(typeof result).toEqual("number");
    expect(result).toEqual(58148);
  });
});
