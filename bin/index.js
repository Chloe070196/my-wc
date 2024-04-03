#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const wc = require("../lib/main.js");

program
  .name("my-wc")
  .option("-l, --lines", "display the number of lines")
  .option("-w, --words", "display the number of words")
  .option("-c, --bytes", "display the number of bytes")
  .description("A command-line wc-like application built with Node.js")
  .argument("<string...>", "file name")
  .action((file, options) => {
    wc(file, options);
  });

program.parse(process.argv);
