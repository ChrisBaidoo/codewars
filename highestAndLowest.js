//In this little assignment you are given a string of space separated numbers, and have to return the 
//highest and lowest number.

function highAndLow(numbers) {
  let array = numbers.split(" ").sort((a, b) => a - b);
  let low = array[0];
  let high = array[array.length - 1];
  return [high, low].join(" ");
}

//Altenative

function highAndLow(numbers){
  let newNumbers = numbers.split(' ').map((item)=>{
    return Number(item)
  })
  return `${Math.max(...newNumbers)} ${Math.min(...newNumbers)}`
}
