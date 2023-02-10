/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or 
more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and 
spaces. Spaces will be included only when more than one word is present.
*/

function spinWords(string) {
  const turnToArray = string.split(" ");
  const reverse = turnToArray.map((item) => {
    return item.length >= 5 ? item.split("").reverse().join("") : item;
  });
  return String(reverse).replace(/,/g, " ");
}

//Altenative solution
function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
