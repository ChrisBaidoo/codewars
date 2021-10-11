/*
Your job is to create a class called Song.
A new Song will take two parameters, title and artist.
You will also have to create an instance method named howMany() (or how_many()).

The method takes an array of people who have listened to the song that day. 
The output should be how many new listeners the song gained on that day out of all listeners. 
Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

*/

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listener = new Set();
  }
  howMany(people) {
    let oldSize = this.listener.size;
    people.map((p) => this.listener.add(p.toLowerCase()));
    return this.listener.size - oldSize;
  }
}
