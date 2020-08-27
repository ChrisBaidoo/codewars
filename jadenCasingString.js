//When writing on Twitter, Jaden is known for almost
//always capitalizing every word. For simplicity, you'll
//have to capitalize each word, check out how contractions
//are expected to be in the example below.
//Your task is to convert strings to how they would be written
//by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are
// not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
  let wordsArray = this.split(" ");
  let newWords = wordsArray.map((word) => {
    let capital = word[0].toUpperCase();
    return capital + word.slice(1);
  });
  return newWords.join(" ");
};
