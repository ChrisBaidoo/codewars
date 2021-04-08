


//First attempt 

function killer(suspectInfo, dead) {
  
    for(let name in suspectInfo){
      let info = suspectInfo[name]
      if(info.includes(dead[0])){
   return name   }
      }
   }

//better attempt 



function killer(suspectInfo, dead) {
    //your code here...
  
    for (let name in suspectInfo) {
      
      let info = suspectInfo[name]
  
      if (dead.every(deadPerson => info.includes(deadPerson))) {
        return name;
      }
    }
  }
  
    
