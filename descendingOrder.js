function descendingOrder(n) {
  let num = String(n).split("");
  return Number(num.sort((a, b) => b - a).join(""));
}
