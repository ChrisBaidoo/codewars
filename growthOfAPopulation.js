//In a small town the population is p0 = 1000 at the beginning of a year. 
//The population regularly increases by 2 percent per year and moreover 50 new 
//inhabitants per year come to live in the town. How many years does the town need to 
//see its population greater or equal to p = 1200 inhabitants?

//More generally given parameters:
//p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
//the function nb_year should return n number of entire years needed to get a population 
//greater or equal to p.

//aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0) 


function nbYear(p0, percent, aug, p) {
   
    let population = p0
    let numberOfYears = 0
    
    while(population < p){
      let growth =   population * (percent / 100) 
      population += growth + aug
      numberOfYears ++
    }
        return numberOfYears
    }

// Another way of looking at it 
    function nbYear(p0, percent, aug, p) {     
        let numberOfYears = 0
        for (let i = p0; i < p; i++){
          let growth = i * (percent/100)
          i += growth + aug
          numberOfYears ++
        }
          return numberOfYears
        }