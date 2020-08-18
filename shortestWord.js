//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let shortest = "";
  let arrayFromString = s.split(" ");
  let sorted = arrayFromString.sort((a, b) => a.length - b.length);
  return (shortest = sorted[0].length);
}
