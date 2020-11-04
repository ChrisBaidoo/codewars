//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once
// (ignore duplicates).

//Example 
//minValue ({1, 3, 1})  ==> return (13)

function minValue(values){
  
    let setOfuniqueNumbers = new Set (values)
    
    let justValues = [...setOfuniqueNumbers]
    
    let sorted = justValues.sort((a,b) => a-b)
    
    return Number(sorted.join(''))
    }