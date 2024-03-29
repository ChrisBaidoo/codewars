/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
They would like your help with an application form that will tell prospective members
which category they will be placed.*/

/*To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
In this croquet club, handicaps range from -2 to +26; the better the player the lower the
handicap.*/

/* Input will consist of a list of lists containing two items each. Each list contains
information for a single potential member. Information consists of an integer for the 
person's age and an integer for the person's handicap.*/

function openOrSenior(data) {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push("Senior");
    } else result.push("Open");
  }

  return result;
}

//Altenative using map

function openOrSenior(data) {
  const result = [];

  data.map((x) => {
    if (x[0] >= 55 && x[1] > 7) {
      result.push("Senior");
    } else result.push("Open");
  });

  return result;
}

//Another altenative
return data.map(([age, handicap]) => {
  return age >= 55 && handicap > 7 ? "Senior" : "Open";
});
