function sortByLength(array) {
  console.log(array);
  console.log(
    array.sort(
      array.map((ele) => {
        return ele.length - ele.length + 1;
      })
    )
  );
}

// array.map((item)=>{
//   return item.sort((a,b) => a - b)
// })
// console.log(check)
// };
