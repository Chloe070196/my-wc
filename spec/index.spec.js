const {
  checkInputValidity,
  getFileContentStr,
  getLineCount,
  getWordCount,
  getNestedWordArr,
  getFileSizeInBytes,
} = require("../lib/utils");

// notes: only unit test are included here
describe("wc: ", () => {
  let file;

  describe("checkInputValidity ", () => {
    it("returns true if the both inputs are valid", () => {
      const result = checkInputValidity("aFileName", "some very long string");
      expect(result).not.toBeUndefined();
      expect(result).toEqual(true);
    });
    it("throws an error if either inputs are invalid", () => {
      expect(() => {checkInputValidity("", "some very long string")}).toThrow(Error("file not found"))
      expect(() => {checkInputValidity(undefined, "some very long string")}).toThrow(Error("file not found"))
      expect(() => {checkInputValidity("aFileName", null)}).toThrow(Error("empty file"))
    });
  })
  
  it("getFileContentStr returns the file contents as a string", () => {
    const result = getFileContentStr("pg132.txt");
    expect(result).not.toBeUndefined();
    expect(typeof result).toEqual("string");
    expect(result.length).toEqual(339294);
  });

  beforeEach(() => {
    file = getFileContentStr("pg132.txt");
  });

  it("getNestedWordArr returns nested arrays containing individual words", () => {
    const result = getNestedWordArr(file);
    expect(result).not.toBeUndefined();
    expect(typeof result).toEqual("object");
    expect(typeof result[0]).toEqual("object");
    expect(typeof result[0][0]).not.toBeUndefined();
  });
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
  it("returns the number of bytes of a file", () => {
    const result = getFileSizeInBytes("pg132.txt");
    expect(result).not.toBeUndefined();
    expect(typeof result).toEqual("number");
    expect(result).toEqual(342192);
  });
});
