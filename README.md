# word count command line app (coding-challenge)

My solution to this challenge [https://codingchallenges.fyi/challenges/challenge-wc](https://codingchallenges.fyi/challenges/challenge-wc)

## Installation

1. clone this repository onto your manchine
2. run `npm i -g` to install the script globally
3. to use `my-wc`:
   - `cd <THE FOLDER CONTAINING THE FILE YOU WOULD LIKE INFO ON>`
   - (optional) run `pwd` to check that you are in the desired location
   - run `my-wc <FILE NAME>` to print the number of line, words, and bytes followed by the file name.
   - run `my-wc <FILE NAME> -l` to print the number of lines only
   - run `my-wc <FILE NAME> -w` to print the number of words only
   - run `my-wc <FILE NAME> -c` to print the number of bytes only

## functional requirements

command: wc [OPTION]... [FILE]...

outputs: Print newline, word, and byte counts for each FILE
If multiple file: also prints a total line

### Notes

- A word is a non-zero-length sequence characters delimited by white space.
- With no FILE, or when FILE is -, read standard input.

### TODO

- multpile files can be processed at ones
- when multiple files are processed, the total is displayed
