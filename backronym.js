var makeBackronym = function (string) {
  const array = string.toUpperCase().split("");
  console.log(array);

  const test = [];

  array.forEach((e, i) => {
    test.push(i);
  });

  for (let i = 0; i < test.length; i++) {
    console.log(dict[array[i]]);
  }
};
