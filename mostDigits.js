//Find the number with the most digits.
//If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  
    let mapped = array.map((item)=>{
      return item.toString().length
    })
        
    console.log(mapped)
    
    console.log(array)
    
  }