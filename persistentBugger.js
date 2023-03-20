function persistence(num) {
  if (num.length === 1) {
    return num;
  }
  console.log(String(num).split("").join("*"));
}
