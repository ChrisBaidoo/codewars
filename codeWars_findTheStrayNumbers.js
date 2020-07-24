function stray(numbers) {
  let groupA = [];
  let groupB = [];

  let max = Math.max(...numbers);

  numbers.map((num) => {
    if (num == max) {
      return groupA.push(num);
    }
    return groupB.push(num);
  });

  if (groupA.length < groupB.length) {
    return groupA[0];
  } else return groupB[0];
}
