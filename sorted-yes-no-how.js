function isSortedAndHow(array) {
    let newArrayForAscending = Array.from(array)
    let newArrayForDescending = Array.from(array)
    let ascending = newArrayForAscending.sort((a,b)=>a-b)
    let descending = newArrayForDescending.sort((a,b)=>b-a)
    
    if(JSON.stringify(array)==JSON.stringify(ascending)){
  return "yes, ascending"  } 
    else if (JSON.stringify(array)==JSON.stringify(descending)){
    return "yes, descending"
    }
    else 
      {
  return "no"    }
    
  }