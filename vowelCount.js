function getCount(str) {
  var vowelsArray = ["a", "e", "i", "o", "u"];
  return str.split("").filter((letter) => vowelsArray.includes(letter)).length;
}
