function menFromBoys(arr){
    let even = []
    let odd = []
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
      even.push(arr[i])}
      else if (arr[i] % 2 !== 0){
      odd.push(arr[i])
      }
    }
      
      return [...new Set(even.sort((a, b)=> a-b)) , ...new Set(odd.sort((c, d)=> d-c)) ]
    
      
      
    
    }