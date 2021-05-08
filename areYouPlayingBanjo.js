//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
//The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
  let beginsWithR = name.toUpperCase().split("").splice(0, 1).join("");
  console.log(beginsWithR);
  if (beginsWithR === "R") {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}


const check = ages.filter((ele)=>{
    ele <= 19 && ele >= 13
  
  
  console.log(check)
  
    
