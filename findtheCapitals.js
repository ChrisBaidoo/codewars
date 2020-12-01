//Write a function that takes a single string (word) as argument. The function must return an 
//ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
    let upper = []
    for (let i = 0; i <= word.length; i++){
     if(String(word[i]) === String(word[i]).toUpperCase()){
       upper.push(i)
     }
      }
    return upper
    }
  