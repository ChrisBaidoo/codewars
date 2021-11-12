/*In this kata, your job is to create a class Dictionary which you can add words to and their entries.
Example: 
>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Can't find entry for Banana
*/
class Dictionary {
  constructor() {
    this.key;
    this.value;
  }
  newEntry(key, value) {
    this.key = key;
    this.value = value;
  }
  look(key) {
    if (key === this.key) {
      return this.value;
    } else {
      return `Can't find entry for ${key}`;
    }
  }
}
