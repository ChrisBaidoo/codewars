/* Your task is to complete the Cat class which Extends Animal and replace the speak method to return the 
cats name + meows. e.g. 'Mr Whiskers meows.' */

class Cat extends Animal {
  speak() {
    return this.name + " meows.";
  }
}

//alternative solution

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} meows.`;
  }
}

//https://www.youtube.com/watch?v=RBLIm5LMrmc
