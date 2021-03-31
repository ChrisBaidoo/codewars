//Take an array and remove every second element from the array. Always keep the first element and 
//start removing with the next element.

function removeEveryOther(arr){
    let filtered = arr.filter((e, i)=>{
      return i % 2 == 0
    })
      return filtered
    }