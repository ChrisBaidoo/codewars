//Complete the method which accepts an array of integers, and returns one of the following:
//"yes, ascending" - if the numbers in the array are sorted in an ascending order
//"yes, descending" - if the numbers in the array are sorted in a descending order
//"no" - otherwise
//You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let newArrayForAscending = Array.from(array)
    let newArrayForDescending = Array.from(array)
    let ascending = newArrayForAscending.sort((a,b)=>a-b)
    let descending = newArrayForDescending.sort((a,b)=>b-a)
    
    if(JSON.stringify(array)==JSON.stringify(ascending)){
      return "yes, ascending"  
    } 
    else if (JSON.stringify(array)==JSON.stringify(descending))
    {
      return "yes, descending"
    }
    else 
      {
      return "no"    
      }
    
  }