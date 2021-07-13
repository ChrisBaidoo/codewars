/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who 
have signed up to attend the next coding meetup that you are organising. The list is ordered according to 
who signed up first.
*/

function getFirstPython(list) {
  for (let developer in list) {
    if (list[developer].language === "Python") {
      return `${list[developer].firstName}, ${list[developer].country}`;
    }
  }
  return `There will be no Python developers`;
}

/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up
to attend the coding meetup that you are organising for the first time.
Your task is to return the number of JavaScript developers coming from Europe.
*/

function countDevelopers(list) {
  let javascript = [];
  list.forEach((dev) => {
    if (dev.language === "JavaScript" && dev.continent === "Europe") {
      javascript.push(dev);
    }
  });
  return javascript.length;
}

/* 
You will be given an array of objects (associative arrays in PHP) representing data about developers who have 
signed up to attend the next coding meetup that you are organising.
Your task is to return:
true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
*/

function isRubyComing(list) {
  let rubyDev = list.find((dev) => dev.language == "Ruby");
  return rubyDev ? true : false;
}

/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have
signed up to attend the next coding meetup that you are organising.
Your task is to return an object (associative array in PHP) which includes the count of each coding language 
represented at the meetup. 
*/

function countLanguages(list) {
  let obj = Object.create(null);

  list.forEach((item) => {
    obj[item.language] = (obj[item.language] || 0) + 1;
  });

  return obj;
}

/* 
Your task is to return either:
true if all developers in the list code in the same language; or
false otherwise.
*/

function isSameLanguage(list) {
  let test = list.every((dev, i, arr) => {
    return dev.language === list[0].language;
  });

  return test;
}

/* 
Alternative solution
*/

function isSameLanguage(list) {
  return new Set(list.map((dev) => dev.language)).size == 1;
}

/* 
Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, 
include all same-age senior developers listed in the same order as they appeared in the original 
input array.
*/

function findSenior(list) {
  let ages = list.map((dev) => {
    return dev.age;
  });
  let oldest = Math.max(...ages);

  let seniorDeveloper = list.filter((dev) => {
    return dev.age === oldest;
  });

  return seniorDeveloper;
}

/* Altenative solution */

function findSenior(list) {
  var maxAge = Math.max(...list.map((person) => person.age));
  return list.filter((person) => person.age === maxAge);
}

/* Will all continents be represented?. Return true if all of the following continents / geographic 
zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise. */

function allContinents(list) {
  let continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  let continentOfDev = list.map((dev) => {
    return dev.continent;
  });
  return continents.every((continent) => continentOfDev.includes(continent));
}

/* 
Your task is to return:
true if developers from all of the following age groups have signed up: 
teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, 
centenarian (at least 100 years young).
false otherwise.
*/

function isAgeDiverse(list) {
  const ages = list.map((dev) => dev.age);

  const teens = ages.filter((ele) => ele <= 19 && ele >= 13);

  const twenties = ages.filter((ele) => ele <= 29 && ele >= 20);

  const thirties = ages.filter((ele) => ele <= 39 && ele >= 30);

  const fourties = ages.filter((ele) => ele <= 49 && ele >= 40);

  const fifties = ages.filter((ele) => ele <= 59 && ele >= 50);

  const sixties = ages.filter((ele) => ele <= 69 && ele >= 60);

  const seventies = ages.filter((ele) => ele <= 79 && ele >= 70);

  const eighties = ages.filter((ele) => ele <= 89 && ele >= 80);

  const ninties = ages.filter((ele) => ele <= 99 && ele >= 90);

  const hundreds = ages.filter((ele) => ele >= 100);

  let all = [
    teens,
    twenties,
    thirties,
    fourties,
    fifties,
    sixties,
    seventies,
    eighties,
    ninties,
    hundreds,
  ];

  return all.every((group) => group.length >= 1);
}

/* Write a function that adds the username property to each object in the input array:*/

function addUsername(list) {
  let date = new Date();
  let year = date.getFullYear();

  let updatedList = list.map((dev) => {
    dev.username = `${dev.firstName.toLowerCase()}${dev.lastName
      .toLowerCase()
      .slice(0, -1)}${eval(year - dev.age)}`;
    return dev;
  });

  return updatedList;
}

//Write a function that when executed as findAdmin(list1, 'JavaScript') returns
//only the JavaScript developers who are GitHub admins:

function findAdmin(list, lang) {
  let javaScriptDevelopers = list.filter(
    (dev) => dev.language === lang && dev.githubAdmin === "yes"
  );

  return javaScriptDevelopers;
}

// Is the meetup language-diverse?
/* Your task is to return either:
true if the number of meetup participants representing any of the three programming languages 
is ** at most 2 times higher than the number of developers representing any of the remaining 
programming languages**; or
false otherwise.*/

function isLanguageDiverse(list) {
  const javascript = list.filter((dev) => dev.language === "JavaScript").length;
  const python = list.filter((dev) => dev.language === "Python").length;
  const ruby = list.filter((dev) => dev.language === "Ruby").length;

  if (javascript / 2 > python || javascript / 2 > ruby) {
    return false;
  }
  if (python / 2 > javascript || python / 2 > ruby) {
    return false;
  }
  if (ruby / 2 > python || ruby / 2 > javascript) {
    return false;
  }
  return true;
}

/* Your task is to return an object which includes the count of food options selected by the 
developers on the meetup sign-up form.. */

function orderFood(list) {
  let food = {};
  list.forEach((dev) => {
    let meal = dev.meal;
    if (!food[meal]) {
      food[meal] = 0;
    }
    food[meal] = food[meal] + 1;
  });
  return food;
}

//Altenative solution
function orderFood(list) {
  let food = {};
  list.forEach((dev) => {
    const { meal } = dev;

    food[meal] = (food[meal] || 0) + 1;
  });
  return food;
}

/*Your task is to return an array where each object will have a new property 'greeting' with the following string value:
Hi < firstName here >, what do you like the most about < language here >? */

function greetDevelopers(list) {
  const updatedList = list.map((obj) => {
    obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
    return obj;
  });

  return updatedList;
}
