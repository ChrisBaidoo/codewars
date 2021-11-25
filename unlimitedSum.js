/* Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.
The function should reject any arguments that are not integers, and sum the remaining integers.*/

function sum(...a) {
  const arraryOfArgs = [...a];

  const numbers = arraryOfArgs.filter((elem) => typeof elem === "number");

  console.log(numbers);
}
