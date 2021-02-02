function filterHomogenous(arrays) {
    console.log(arrays)
      
      let newArray = []
      
      arrays.map((arra)=>{ 
        
        if (new Set( arra.map( item => typeof item ) ).size <= 1){
          
    newArray.push(arra)
        }
        
        })
      
      console.log(newArray.filter((item)=>{
        return item.length === 0
      }))
                  
    }