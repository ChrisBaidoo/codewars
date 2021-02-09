//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsArray = ["a", "e", "i", "o", "u"];
  return str.split("").filter((letter) => vowelsArray.includes(letter)).length;
}


// Another altenative

function getCount(str) {
  let vowelsCount = 0;
  
  let vowels = ["a", "e", "i", "o", "u"];
  
   str.split('').forEach((char) => {
    if(vowels.includes(char))
      {
       vowelsCount ++
      }
    })                    
  return vowelsCount;  
}