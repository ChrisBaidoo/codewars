/*Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, 
using the preloaded dictionary and return a string of words, separated with a single space 
(but no trailing spaces). The keys of the preloaded dictionary are uppercase letters A-Z and the values are 
predetermined words, for example: */

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

/* Altenative Solution */
var makeBackronym = function (string) {
  return string
    .toUpperCase()
    .split("")
    .map((letter) => dict[letter])
    .join(" ");
};
