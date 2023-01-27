/*Complete the solution so that it returns the greatest sequence of five consecutive digits 
found within the number given. The number will be
passed in as a string of only digits. It should
return a five digit integer. The number passed
may be as large as 1000 digits.*/

function solution(digits) {
  let newArray = [];
  for (let i = 0; i < digits.length - 4; i++) {
    newArray.push(digits.slice(i, 5 + i));
  }

  let highestNumber = Math.max(...newArray);

  console.log(highestNumber);

  return highestNumber;
}
