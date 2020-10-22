//As a part of this Kata, you need to create a function that when provided with a triplet, 
//returns the index of the numerical element that lies between the other two elements.

//The input to the function will be an array of three distinct numbers

var gimme = function (inputArray) {
  
    console.log(inputArray)
    let sorted = inputArray.sort((a,b)=>a-b)
    console.log(sorted)
    let middle = sorted[1]
    console.log(Number(middle))
    let middled = inputArray.indexOf(Number(middle))
    console.log(middled)
    console.log(typeof(middle))
    };