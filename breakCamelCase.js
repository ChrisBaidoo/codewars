/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  const index = string.match(/[A-Z]/g).map(function (cap) {
    return string.indexOf(cap);
  });

  const js = [...string].map((a) => {
    if (string.indexOf(a) === index[0]) {
      console.log(a);
    }
  });
}
