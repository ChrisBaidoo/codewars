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
