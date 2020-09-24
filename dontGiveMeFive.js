//In this kata you get the start number and the end number of a region and
//should return the count of all numbers except numbers with a 5 in it. The start and
//the end number are both inclusive!

function dontGiveMeFive(start, end) {
  let numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  let withNumber = numbers.filter((number) => {
    let checker = null;
    if (String(number).includes("5")) {
      checker = number;
    }
    return number !== checker;
  });
  return withNumber.length;
}
