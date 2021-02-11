//In this little assignment you are given a string of space separated numbers, and have to return the 
//highest and lowest number.

//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"

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