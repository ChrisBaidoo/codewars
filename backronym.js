const makeBackronym = function (string) {
  const array = string.toUpperCase().split("");

  const index = [];
  const words = [];

  array.forEach((e, i) => {
    index.push(i);
  });

  for (let i = 0; i < index.length; i++) {
    words.push(dict[array[i]]);
  }
  return `${words.join(" ")}`;
};
