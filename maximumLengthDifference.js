function mxdiflg(a1, a2) {

  if(a1.length === 0 || a2.length === 0){
    return -1
  } 
    
    
  let lengthsFromA1 = a1.map((item)=>{
    return item.length
  })
  
  let maxValueFromA1 = Math.max(...lengthsFromA1)
  let minValueFromA1 = Math.min(...lengthsFromA1)
  
  console.log(maxValueFromA1, minValueFromA1)
    
  let lengthsFromA2 = a2.map((item)=>{
    return item.length
  })
  
  let minValueFromA2 = Math.min(...lengthsFromA2)
  let maxValueFromA2 = Math.max(...lengthsFromA2)  
  
  let differenceBetweenMaxFromA1AndMinFromA2 = maxValueFromA1 - minValueFromA2
  
  let differenceBetweenMaxFromA2andMinFromA1 = maxValueFromA2 - minValueFromA1
  
  return Math.max(differenceBetweenMaxFromA1AndMinFromA2, differenceBetweenMaxFromA2andMinFromA1)
    
  }