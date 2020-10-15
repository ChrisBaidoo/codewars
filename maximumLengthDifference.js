function mxdiflg(a1, a2) {
  
    let max = a1.map((item)=>{
      return item.length
    })
    console.log(max)
    console.log(Math.max(...max))
      
      let min = a2.map((item)=>{
      return item.length
    })
    console.log(Math.min(...min))
        return max-min
    }