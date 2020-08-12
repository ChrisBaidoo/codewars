function squareDigits(num) {
  let numbers = String(num).split("");
  let newNumbers = numbers.map((number) => number * number).join("");
  return Number(newNumbers);
}
