//Complete the solution so that it returns true if the first argument(string)
//passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  console.log(str);
  console.log(ending.length);
  return str.charAt(str.length - 1) === ending.charAt(ending.length - 1)
    ? true
    : false;
}
