//As a part of this Kata, you need to create a function that when provided with a triplet, 
//returns the index of the numerical element that lies between the other two elements.

//The input to the function will be an array of three distinct numbers

var gimme = function (inputArray) {

    let inputArrayCopy = [...inputArray]

    let sorted = inputArrayCopy.sort((a, b) => a - b)

    let middle = sorted[1]

    return (inputArray.indexOf(middle))

};