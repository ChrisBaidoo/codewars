//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  let arrayUppercase = str.toUpperCase().split("").sort();
  let arrayo = new Set(arrayUppercase);
  if (arrayUppercase.length == 0) {
    return true;
  } else {
    return arrayo.size == arrayUppercase.length ? true : false;
  }
}
