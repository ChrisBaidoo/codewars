function filterHomogenous(arrays) {
  
    let newArray = []
    
    arrays.map((arra)=>{ 
      
      if (new Set( arra.map( item => typeof item ) ).size <= 1){
        newArray.push(arra)
      }
       })
      return newArray.filter((item)=>{
      return item.length !== 0
    })
                
  }