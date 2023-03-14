function alphabetPosition(text) {
  const lowerCaseText = text
    .toLowerCase()
    .replace(/[\s\'\.]/g, "")
    .split("");

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
  const result = lowerCaseText.map((a) => {
    if (alphabet.indexOf(a) != -1) {
      return alphabet.indexOf(a) + 1;
    }
  });
  return result.join(" ");
}
