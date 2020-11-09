function inAscOrder(arr) {
  
    let copyOfArray = [...arr]
    
    console.log(copyOfArray)
    let sorted = copyOfArray.sort((a,b)=>a-b)
    console.log (sorted)
      console.log (arr)
  
    
    if (arr == sorted){
      console.log('Hello')
    }
    return false
  }