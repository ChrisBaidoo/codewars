// Given an integer as input, can you round it to the next multiple of 5?

function roundToNext5(n){
    let dividedByFive = n/5
    return Math.ceil(dividedByFive)*5
    }