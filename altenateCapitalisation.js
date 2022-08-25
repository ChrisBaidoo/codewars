/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces. */

function capitalize(s){

  let even = []
  let odd = []
    
  for(i = 0; i < s.length; i++){
    if(i % 2 === 0){
     even.push(s[i].toUpperCase())
    }
    else even.push(s[i])
  }
    
    for(i = 0; i < s.length; i++){
    if(i % 2 === 0){
     odd.push(s[i])
    }
    else odd.push(s[i].toUpperCase())
  }
    
    let together = [String(even.join('')), (String(odd.join('')))]
    return together
  };
