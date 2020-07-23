function stray(numbers) {
  //sort the array
  let sorted = numbers.sort((a, b) => {
    a - b;
  });

  //push odd one into an array
  let odd = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted(i) !== sorted(i + 1)) {
      odd.push(i);
    }
  }
  //     sorted.map((num)=>{
  //       if(num !== sorted[num+1]){
  //         odd.push(num)
  //       }
  //     })
  console.log(sorted);
  console.log(odd);
}

function stray(numbers) {
  //sort the array
  let sorted = numbers.sort((a, b) => {
    a - b;
  });
  let odd = [];

  let max = Math.max(...sorted);
  let min = Math.min(...sorted);

  sorted.map((num) => {
    if (num == max) {
      console.log(max);
    }
    console.log(min);
  });

  //Altenative solution
  let sorted = numbers.sort((a,b)=>{ return a - b});
  let odd = [];
    
  console.log(sorted)
  
  for(let i = sorted[0]; i < sorted; i++){
    if(sorted(i) != sorted(i+1){
    odd.push(sorted(i))
    }
  }
}
