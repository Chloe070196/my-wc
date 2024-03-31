# word count command line app (coding-challenge)

My solution to this challenge [https://codingchallenges.fyi/challenges/challenge-wc](https://codingchallenges.fyi/challenges/challenge-wc)

## functional requirements

command: wc [OPTION]... [FILE]...

outputs: Print newline, word, and byte counts for each FILE
If multiple file: also prints a total line

### Notes

- A word is a non-zero-length sequence characters delimited by white space.
- With no FILE, or when FILE is -, read standard input.

## features

### current

- the `npm run my-wc <FILE NAME>` command prints the number of line, words, and bytes followed by the file name.

### TODO

- accomodate for the following commands:

  - -l (number of lines only)
  - -w (number of words only)
  - -c (number of bytes only)
  - read from standard input if no filename is specified
