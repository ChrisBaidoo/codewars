/* Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated */

class Ghost {
  constructor(
    color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)]
  ) {
    return (this.color = color);
  }
}
