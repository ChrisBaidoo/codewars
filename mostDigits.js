//Find the number with the most digits.
//If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  let newArr = array.map(function(element) {
    return element.toString()
  })
  
  newArr.sort(function(a,b) {
    return b.length - a.length
  })
    
  return parseInt(newArr[0])  
}