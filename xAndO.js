/* Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char. */

function XO(str) {
  let x = [];
  let o = [];
  let upperCase = str.toUpperCase();

  for (let i = 0; i <= upperCase.length; i++) {
    if (upperCase[i] === "X") {
      x.push(upperCase[i]);
    } else if (upperCase[i] === "O") {
      o.push(upperCase[i]);
    }
  }
  return x.length === o.length;
}
