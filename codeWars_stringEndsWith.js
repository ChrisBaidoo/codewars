//Complete the solution so that it returns true if the first argument(string)
//passed in ends with the 2nd argument (also a string).

//The first string should end with the second (whole) string

function solution(str, ending) {
  return str.includes(ending, str.length - ending.length);
}

// After submitting my answer and looking at other solutions, here is an altenative
function solution(str, ending) {
  return str.endsWith(ending);
}
