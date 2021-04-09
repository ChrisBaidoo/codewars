//Complete the function to find the count of the most frequent item of an array. 
//You can assume that input is an array of integers. For an empty array return 0

function mostFrequentItemCount(collection) {
    let counter = []
    let sorted = collection.sort((a, b)=> a - b)
    
    for(let i = 0; i <= sorted.length; i++){
      if (sorted[i] === sorted[i + 1]) {
        counter.push(sorted[i])
        counter.push(sorted[i + 1])
                     
        } else return
      console.log(counter.length)
    }
    
  }