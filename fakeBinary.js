//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
//Return the resulting string.

function fakeBin(x){
    let arrayOfStrings = x.split('')
    let arrayOfNumbers = arrayOfStrings.map((number)=>{
    return(+number < 5) ? '0' : '1'
    })
    return arrayOfNumbers.join('')
    }