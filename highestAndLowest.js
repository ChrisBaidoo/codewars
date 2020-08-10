function highAndLow(numbers) {
  let array = numbers.split(" ").sort((a, b) => a - b);
  let low = array[0];
  let high = array[array.length - 1];
  return [high, low].join(" ");
}
