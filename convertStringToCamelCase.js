/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str) {
  const turnToArray = str.split("");

  turnToArray.map((a, i) => {
    if (a === "-" || a === "_") {
      return (turnToArray[i + 1] = turnToArray[i + 1].toUpperCase());
    }
  });

  return turnToArray.join("").replace(/[-,_]/g, "");
}

// Altenative solution using just regex

function toCamelCase(str) {
  return str.replace(/[_-]\w/gi, (ch) => ch[1].toUpperCase());
}
