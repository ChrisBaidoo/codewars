function getMiddle(s) {
  var arrayFromString = s.split("");

  var isEven = arrayFromString.length % 2 === 0;
  if (isEven) {
    var index = arrayFromString.length / 2;
    return arrayFromString[index - 1] + arrayFromString[index];
  } else {
    var index = Math.floor(arrayFromString.length / 2);
    return arrayFromString[index];
  }
}
