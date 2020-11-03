//Given a string str, reverse it omitting all non-alphabetic characters.

//Example:
//For str = "krishan", the output should be "nahsirk".
//For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    //coding and coding..
    
    let newString = str.replace(/[^a-zA-Z]+/gi, '')
    return  finished = newString.split('').reverse().join('')
      
  }