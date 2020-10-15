//You are given an odd-length array of integers, in which all of them are the same,
//except for one single number.

//Complete the method which accepts such an array, and returns that single different number.

//The input array will always be valid! (odd-length >= 3)

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
  } return groupB[0];
}
