/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who 
have signed up to attend the next coding meetup that you are organising. The list is ordered according to 
who signed up first.
*/

function getFirstPython(list) {
    for(let developer in list){
      if(list[developer].language === "Python"){
      return `${list[developer].firstName}, ${list[developer].country}`  
      }
    }
        return `There will be no Python developers`
   }

/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up
to attend the coding meetup that you are organising for the first time.
Your task is to return the number of JavaScript developers coming from Europe.
*/

function countDevelopers(list) {
    let javascript = []
    list.forEach((dev)=>{
      if(dev.language === "JavaScript" && dev.continent === "Europe"){
        javascript.push(dev)
      }
    })
    return javascript.length
}