//Find the number with the most digits.
//If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  
    //   let mapped = array.map((item)=>{
    //     return item.toString().length
    //   })
      
      console.log(Math.max(...array))
      
      let arrayLength = []
      
      
      for(let i = 0; i < array.length; i++){
    
        arrayLength.push(String(array[i]).length)
        
      }
        
    
          console.log(arrayLength)
    
            for(let i = 0; i < arrayLength.length; i++){
            if (String(arrayLength[i]) === String(arrayLength[i + 1])){
          console.log("hello")
        }
      }
      
            console.log(arrayLength)
      
      //We need to sort  arrayLength from minimum to maximum then do a comparison if two numbers are the same 
    
      
      
    
      
    }