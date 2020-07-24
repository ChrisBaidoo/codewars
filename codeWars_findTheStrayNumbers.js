function stray(numbers) {
  let sorted = numbers.sort((a, b) => {
    a - b;
  });
  let odd = [];
  let groupA = [];
  let groupB = [];

  let max = Math.max(...sorted);
  let min = Math.min(...sorted);

  sorted.map((num) => {
    if (num == max) {
      return groupA.push(num);
    }
    return groupB.push(num);
  });

  console.log(groupA);
  console.log(groupB);

  if (groupA.length < groupB.length) {
    return groupA[0];
  } else return groupB[0];
}
