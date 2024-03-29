/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitalRoot(n) {
  if (n.toString().length === 1) {
    return n;
  }
  const hj = String(n)
    .split("")
    .reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);
  console.log(typeof hj);
  const valAsString = hj.toString();
  console.log(typeof valAsString);

  if (valAsString.length !== 1) {
    console.log("true");
    const val = valAsString.split("").reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);
    return Number(val);
  } else {
    return hj;
  }
}

/* After trying loops to no avail this mathematical approach seems to work 
https://en.wikipedia.org/wiki/Casting_out_nines
*/
function digitalRoot(n) {
  if (n === 0) {
    return n;
  }
  return n % 9 || 9;
}
