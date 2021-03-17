//Given two integers a and b, which can be positive or negative,
//find the sum of all the numbers between including them too and
//return it. If the two numbers are equal return a or b.
//Note: a and b are not ordered!

function getSum(a, b) {
  let lowest = Math.min(a, b);
  let highest = Math.max(a, b);
  let result = 0;

  if (b === a) {
    return b;
  } else {
    for (let i = lowest; i <= highest; i++) {
      result += i;
    }
  }

  return result;
}

//Alternative solution

function getSum( a,b )
{
  let numbers = []
  let max = Math.max(a,b)
  let min = Math.min(a,b)
  
  for(let i = min; i <= max; i++){
  numbers.push(i)
}
  return (eval(numbers.join("+")))
}
