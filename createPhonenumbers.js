/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a 
string of those numbers in the form of a phone number. */

function createPhoneNumber(numbers) {
  const firstThreeNumbers = numbers.splice(0, 3);
  const nextThreeNumbers = numbers.splice(0, 3);

  return `(${firstThreeNumbers.join("")}) ${nextThreeNumbers.join(
    ""
  )}-${numbers.join("")}`;
}
