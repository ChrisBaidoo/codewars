/*
Some people have been killed!
You have managed to narrow the suspects down to just a few. 
Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have 
seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}

 and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person 
that saw both 'Lucas' and 'Bill'
*/

function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    let info = suspectInfo[name];
    if (info.includes(dead[0])) {
      return name;
    }
  }
}

//better attempt

function killer(suspectInfo, dead) {
  //your code here...

  for (let name in suspectInfo) {
    let info = suspectInfo[name];

    if (dead.every((deadPerson) => info.includes(deadPerson))) {
      return name;
    }
  }
}
