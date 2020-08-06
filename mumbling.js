function accum(s) {
  var arrayFromString = s.split("");
  return arrayFromString
    .map((letter, index) => {
      var newLetters = letter.toUpperCase();
      for (let i = 0; i < index; i++) {
        newLetters += letter.toLowerCase();
      }
      return newLetters;
    })
    .join("-");
}
