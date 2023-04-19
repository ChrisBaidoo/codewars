/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
  const lowerCaseText = text
    .toLowerCase()
    .replace(/[\s\'\.]/g, "")
    .split("");
  const lettersIndex = [];
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  lowerCaseText.map((a) => {
    if (alphabet.indexOf(a) != -1) {
      lettersIndex.push(alphabet.indexOf(a) + 1);
    }
  });
  return lettersIndex.join(" ");
}

//Altenative solutions

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return text
    .toLowerCase()
    .split("")
    .filter((letter) => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    })
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(" ");
}
