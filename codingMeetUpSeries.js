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
