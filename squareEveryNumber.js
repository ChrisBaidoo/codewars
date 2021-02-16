//Welcome. In this kata, you are asked to square every
//digit of a number.

function squareDigits(num) {
  let numbers = String(num).split("");
  let newNumbers = numbers.map((number) => number * number).join("");
  return Number(newNumbers);
}

//An altenative
function squareDigits(num){
  let array = Array.from(`${num}`).map((num)=>{
    return num * num    
  }).join('')
  return  Number(array)
}
